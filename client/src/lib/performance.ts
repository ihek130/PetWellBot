// Performance optimization utilities
import { lazy } from 'react';

// Preload critical routes
export const preloadRoutes = () => {
  // Preload critical CSS and resources
  const criticalResources = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  ];

  criticalResources.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
};

// Image optimization helper
export const optimizeImage = (src: string, options?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg';
}) => {
  const { width, height, quality = 85, format = 'webp' } = options || {};
  
  // For Unsplash images, add optimization parameters
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    url.searchParams.set('auto', 'format,compress');
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('fm', format);
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    return url.toString();
  }
  
  return src;
};

// Lazy load components with preloading
export const createLazyComponent = (importFn: () => Promise<any>, preload = false) => {
  const LazyComponent = lazy(importFn);
  
  if (preload) {
    // Preload after initial render
    setTimeout(() => importFn(), 100);
  }
  
  return LazyComponent;
};

// Performance monitoring
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        console.log('🚀 Performance Metrics:', {
          'DNS Lookup': `${perfData.domainLookupEnd - perfData.domainLookupStart}ms`,
          'TCP Connect': `${perfData.connectEnd - perfData.connectStart}ms`,
          'First Byte': `${perfData.responseStart - perfData.requestStart}ms`,
          'DOM Load': `${perfData.domContentLoadedEventEnd - perfData.fetchStart}ms`,
          'Full Load': `${perfData.loadEventEnd - perfData.fetchStart}ms`,
          'LCP': 'Measuring...'
        });
        
        // Largest Contentful Paint
        if ('PerformanceObserver' in window) {
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('📊 LCP:', `${lastEntry.startTime.toFixed(0)}ms`);
          }).observe({ entryTypes: ['largest-contentful-paint'] });
          
          // Cumulative Layout Shift
          let clsValue = 0;
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            console.log('📐 CLS:', clsValue.toFixed(4));
          }).observe({ entryTypes: ['layout-shift'] });
        }
        
      }, 0);
    });
  }
};

// Resource hints for critical third-party domains
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: '//images.unsplash.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
};

// Bundle analysis helper
export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('📦 Bundle Analysis Available - Run: npm run build && npm run analyze');
  }
};