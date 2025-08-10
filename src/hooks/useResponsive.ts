import { useState, useEffect } from 'react';
import { breakpoints } from '../utils/responsive';

export interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  breakpoint: string;
}

export const useResponsive = (): ResponsiveState => {
  const [responsiveState, setResponsiveState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    breakpoint: 'lg',
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let breakpoint = 'lg';
      if (width <= breakpoints.xs) breakpoint = 'xs';
      else if (width <= breakpoints.sm) breakpoint = 'sm';
      else if (width <= breakpoints.md) breakpoint = 'md';
      else if (width <= breakpoints.lg) breakpoint = 'lg';
      else if (width <= breakpoints.xl) breakpoint = 'xl';
      else breakpoint = 'xxl';

      setResponsiveState({
        isMobile: width <= breakpoints.md,
        isTablet: width > breakpoints.md && width <= breakpoints.lg,
        isDesktop: width > breakpoints.lg,
        screenWidth: width,
        screenHeight: height,
        breakpoint,
      });
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return responsiveState;
};

export const useBreakpoint = () => {
  const { breakpoint } = useResponsive();
  return breakpoint;
};

export const useIsMobile = () => {
  const { isMobile } = useResponsive();
  return isMobile;
};

export const useIsTablet = () => {
  const { isTablet } = useResponsive();
  return isTablet;
};

export const useIsDesktop = () => {
  const { isDesktop } = useResponsive();
  return isDesktop;
};
