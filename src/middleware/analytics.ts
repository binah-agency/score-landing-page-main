import type { MiddlewareHandler } from 'astro';

interface AnalyticsData {
  sessionId: string;
  timestamp: string;
  userAgent: string;
  ip: string;
  url: string;
  referrer: string;
  method: string;
  statusCode: number;
  responseTime: number;
  contentType?: string;
  isBot?: boolean;
}

// Simple bot detection
function isBot(userAgent: string): boolean {
  const bots = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
    'yandexbot', 'facebookexternalhit', 'twitterbot', 'rogerbot',
    'linkedinbot', 'embedly', 'quora link preview', 'showyoubot',
    'outbrain', 'pinterest', 'developers.google.com'
  ];
  
  return bots.some(bot => 
    userAgent.toLowerCase().includes(bot)
  );
}

// Get client IP with privacy
function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || real || 'unknown';
  
  // Anonymize IP for privacy compliance
  return ip.replace(/\.\d+$/, '.0');
}

// Get or create session ID
function getOrCreateSessionId(request: Request): string {
  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    const match = cookieHeader.match(/aem_session_id=([^;]+)/);
    if (match) return match[1];
  }
  
  return crypto.randomUUID();
}

// Store analytics data (in production, use database)
const analyticsStore: AnalyticsData[] = [];

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request } = context;
  const startTime = Date.now();
  
  // Skip tracking for non-HTML requests and assets
  const url = new URL(request.url);
  const skipPaths = ['/api/', '/_astro/', '/favicon', '/robots.txt'];
  
  if (skipPaths.some(path => url.pathname.startsWith(path))) {
    return next();
  }
  
  const userAgent = request.headers.get('user-agent') || '';
  
  // Skip bot traffic (optional, based on your needs)
  if (isBot(userAgent)) {
    return next();
  }
  
  const sessionId = getOrCreateSessionId(request);
  const ip = getClientIP(request);
  
  // Process request
  const response = await next();
  const responseTime = Date.now() - startTime;
  
  // Only track successful HTML responses
  const contentType = response.headers.get('content-type') || '';
  const isHTML = contentType.includes('text/html');
  const isSuccess = response.status >= 200 && response.status < 400;
  
  if (isHTML && isSuccess) {
    const analyticsData: AnalyticsData = {
      sessionId,
      timestamp: new Date().toISOString(),
      userAgent,
      ip,
      url: request.url,
      referrer: request.headers.get('referer') || '',
      method: request.method,
      statusCode: response.status,
      responseTime,
      contentType,
      isBot: isBot(userAgent)
    };
    
    // Store for analytics (in production, send to database/analytics service)
    analyticsStore.push(analyticsData);
    
    // Add session ID to response
    response.headers.set('Set-Cookie', 
      `aem_session_id=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=1800`
    );
    
    // Debug logging in development
    if (import.meta.env.DEV) {
      console.log('📊 Server-side Analytics:', {
        sessionId: sessionId.slice(0, 8) + '...',
        url: url.pathname,
        responseTime,
        statusCode: response.status
      });
    }
  }
  
  return response;
};

// Export function to get analytics data
export function getAnalyticsData(limit = 100): AnalyticsData[] {
  return analyticsStore.slice(-limit);
}

// Export function to get session metrics
export function getSessionMetrics() {
  const sessions = new Map<string, { count: number; totalTime: number; lastSeen: string }>();
  
  analyticsStore.forEach(event => {
    const existing = sessions.get(event.sessionId) || { count: 0, totalTime: 0, lastSeen: '' };
    sessions.set(event.sessionId, {
      count: existing.count + 1,
      totalTime: existing.totalTime + event.responseTime,
      lastSeen: event.timestamp
    });
  });
  
  return {
    totalSessions: sessions.size,
    totalPageViews: analyticsStore.length,
    averageResponseTime: analyticsStore.reduce((sum, e) => sum + e.responseTime, 0) / analyticsStore.length,
    uniqueSessions: Array.from(sessions.entries()).map(([id, data]) => ({
      sessionId: id.slice(0, 8) + '...',
      ...data
    }))
  };
}
