// Responsive breakpoints and utilities
export const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const isMobile = () => window.innerWidth <= breakpoints.md;
export const isTablet = () => window.innerWidth > breakpoints.md && window.innerWidth <= breakpoints.lg;
export const isDesktop = () => window.innerWidth > breakpoints.lg;

export const getResponsiveValue = <T>(
  mobile: T,
  tablet: T,
  desktop: T
): T => {
  if (isMobile()) return mobile;
  if (isTablet()) return tablet;
  return desktop;
};

export const getResponsiveSpacing = (mobile: number, tablet: number, desktop: number) => {
  return getResponsiveValue(mobile, tablet, desktop);
};

export const getResponsiveFontSize = (mobile: string, tablet: string, desktop: string) => {
  return getResponsiveValue(mobile, tablet, desktop);
};

export const getResponsivePadding = (mobile: number, tablet: number, desktop: number) => {
  return getResponsiveValue(mobile, tablet, desktop);
};

export const getResponsiveMargin = (mobile: number, tablet: number, desktop: number) => {
  return getResponsiveValue(mobile, tablet, desktop);
};

// Responsive grid configurations
export const responsiveCols = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 4,
};

export const responsiveGutter = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

// Responsive spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// Responsive font sizes
export const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '24px',
  xxxl: '32px',
  display: '48px',
  hero: '64px',
};

// Responsive component sizes
export const componentSizes = {
  button: {
    mobile: { height: 40, fontSize: '14px', padding: '0 16px' },
    tablet: { height: 44, fontSize: '16px', padding: '0 20px' },
    desktop: { height: 48, fontSize: '18px', padding: '0 24px' },
  },
  avatar: {
    mobile: { size: 32 },
    tablet: { size: 40 },
    desktop: { size: 48 },
  },
  card: {
    mobile: { padding: 16, borderRadius: 12 },
    tablet: { padding: 20, borderRadius: 16 },
    desktop: { padding: 24, borderRadius: 20 },
  },
};
