// Design System Index - Centralized exports for JS compatibility

// Export utilities for component composition
export const composeClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const createVariant = (base, variants) => {
  return (variant) => {
    return composeClasses(base, variant ? variants[variant] : '');
  };
};

export const withResponsive = (classes) => {
  return composeClasses(
    classes.mobile && `lg:hidden ${classes.mobile}`,
    classes.desktop && `hidden lg:block ${classes.desktop}`
  );
};

// Design tokens for direct access
export const tokens = {
  colors: {
    primary: 'var(--color-azulhorizonte)',
    primaryAlt: 'var(--color-azulhorizonte-alt)',
    secondary: 'var(--color-verdevitalidad)',
    accent: 'var(--color-amarilloenergia)',
    gray50: 'var(--color-gray50)',
    gray100: 'var(--color-gray100)',
    gray200: 'var(--color-gray200)',
    gray300: 'var(--color-gray300)',
    gray400: 'var(--color-gray400)',
    gray500: 'var(--color-gray500)',
    gray600: 'var(--color-gray600)',
    gray700: 'var(--color-gray700)',
    gray800: 'var(--color-gray800)',
    gray900: 'var(--color-gray900)',
    white: '#ffffff',
    black: '#000000'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  typography: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    }
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out'
  }
};

// Component variants
export const variants = {
  button: {
    primary: {
      base: 'font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[var(--color-azulhorizonte)]/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
      sizes: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-14 px-6 text-base',
        lg: 'h-16 px-8 text-lg'
      },
      colors: {
        base: 'bg-[var(--color-azulhorizonte)] hover:bg-[var(--color-azulhorizonte-alt)] disabled:hover:bg-[var(--color-azulhorizonte)]'
      }
    },
    secondary: {
      base: 'font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[var(--color-azulhorizonte)]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[var(--color-azulhorizonte)] active:scale-[0.98]',
      sizes: {
        sm: 'h-10 px-4 text-sm',
        md: 'h-14 px-6 text-base',
        lg: 'h-16 px-8 text-lg'
      },
      variants: {
        outline: 'border-2 border-[var(--color-azulhorizonte)] text-[var(--color-azulhorizonte)] hover:bg-[var(--color-azulhorizonte)] hover:text-white',
        ghost: 'border-2 border-transparent text-[var(--color-azulhorizonte)] hover:bg-[var(--color-azulhorizonte)]/10'
      }
    }
  },
  card: {
    base: 'rounded-xl transition-all duration-200',
    variants: {
      default: 'bg-white shadow-sm hover:shadow-md',
      elevated: 'bg-white shadow-lg hover:shadow-xl',
      outlined: 'bg-white border border-gray-200 hover:border-gray-300'
    },
    padding: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    }
  },
  alert: {
    base: 'relative rounded-lg border p-4',
    variants: {
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      success: 'bg-green-50 border-green-200 text-green-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      error: 'bg-red-50 border-red-200 text-red-800'
    }
  }
};
