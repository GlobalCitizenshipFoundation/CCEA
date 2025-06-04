
// Netlify-specific optimizations and utilities

export const preloadCriticalResources = () => {
  // Preload critical CSS and fonts
  const criticalResources = [
    '/assets/fonts/inter-var.woff2',
    '/assets/critical.css'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (resource.endsWith('.woff2')) {
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

export const optimizeImages = () => {
  // Lazy load images with Intersection Observer
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

export const enableNetlifyAnalytics = () => {
  // Initialize Netlify Analytics if available
  if (window.netlifyIdentity) {
    window.netlifyIdentity.init();
  }
};

// Service worker for caching and offline support
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('SW registered'))
        .catch(() => console.log('SW registration failed'));
    });
  }
};
