// Design System Index - Centralized exports
export { ThemeProvider } from './ThemeProvider.astro';
export { ComponentFactory } from './ComponentFactory.astro';

// Re-export commonly used components
export { default as PrimaryButton } from '../PrimaryButton.astro';
export { default as SecondaryButton } from '../SecondaryButton.astro';
export { default as BackToTopButton } from '../BackToTopButton.astro';
export { default as Icon } from '../atoms/Icon.astro';
export { default as Badge } from '../atoms/Badge.astro';
export { default as Avatar } from '../atoms/Avatar.astro';
export { default as Card } from '../molecules/Card.astro';
export { default as Alert } from '../molecules/Alert.astro';

// Utility functions for component composition
export const composeClasses = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const createVariant = (base: string, variants: Record<string, string>) => {
  return (variant?: string) => {
    return composeClasses(base, variant ? variants[variant] : '');
  };
};

export const withResponsive = (classes: { mobile?: string; desktop?: string }) => {
  return composeClasses(
    classes.mobile && `lg:hidden ${classes.mobile}`,
    classes.desktop && `hidden lg:block ${classes.desktop}`
  );
};
