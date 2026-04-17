import type { APIRoute } from 'astro';

interface AnalyticsEvent {
  event: string;
  timestamp: string;
  session_id?: string;
  page?: string;
  url?: string;
  referrer?: string;
  user_agent?: string;
  viewport?: { w: number; h: number };
  [key: string]: any;
}

interface ServerSideEvent {
  type: 'page_view' | 'server_event';
  timestamp: string;
  sessionId: string;
  userAgent: string;
  ip: string;
  url: string;
  referrer: string;
  method: string;
  statusCode: number;
  responseTime: number;
  [metadata: string]: any;
}

// In-memory storage for demo (use database in production)
const analyticsStore: AnalyticsEvent[] = [];
const serverEvents: ServerSideEvent[] = [];

// Generate or retrieve session ID
function getOrCreateSessionId(request: Request): string {
  const sessionId = request.headers.get('x-session-id') || 
                   crypto.randomUUID();
  return sessionId;
}

// Extract user IP (respecting privacy)
function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || real || 'unknown';
  
  // Anonymize IP for privacy
  return ip.replace(/\.\d+$/, '.0');
}

// Process server-side analytics
export const POST: APIRoute = async ({ request }) => {
  try {
    const startTime = Date.now();
    const sessionId = getOrCreateSessionId(request);
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const ip = getClientIP(request);
    const url = request.url;
    const referrer = request.headers.get('referer') || '';
    
    const body = await request.json() as AnalyticsEvent | AnalyticsEvent[];
    const events = Array.isArray(body) ? body : [body];
    
    // Process each event
    for (const event of events) {
      const processedEvent: AnalyticsEvent = {
        ...event,
        session_id: event.session_id || sessionId,
        timestamp: event.timestamp || new Date().toISOString(),
        server_timestamp: new Date().toISOString(),
        ip_anonymized: ip,
        processed_server_side: true
      };
      
      // Store event (in production, save to database)
      analyticsStore.push(processedEvent);
      
      // Log for debugging
      if (import.meta.env.DEV) {
        console.log('📊 Analytics Event:', processedEvent);
      }
    }
    
    const responseTime = Date.now() - startTime;
    
    // Track the API call itself
    const serverEvent: ServerSideEvent = {
      type: 'server_event',
      timestamp: new Date().toISOString(),
      sessionId,
      userAgent,
      ip,
      url,
      referrer,
      method: 'POST',
      statusCode: 200,
      responseTime,
      eventCount: events.length
    };
    
    serverEvents.push(serverEvent);
    
    return new Response(JSON.stringify({ 
      success: true, 
      eventsProcessed: events.length,
      sessionId 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `aem_session_id=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=1800`
      }
    });
    
  } catch (error) {
    console.error('Analytics API Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Invalid request body' 
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Get analytics data (for dashboard)
export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '100');
  const type = url.searchParams.get('type') || 'client';
  
  const data = type === 'server' ? serverEvents : analyticsStore;
  const limited = data.slice(-limit);
  
  return new Response(JSON.stringify({
    success: true,
    data: limited,
    total: data.length
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
