
import { lazy } from 'react';
import React from 'react';

// Utility for lazy loading with better error handling
export const createLazyComponent = (importFn: () => Promise<any>) => {
  return lazy(() => 
    importFn().catch(error => {
      console.error('Failed to load component:', error);
      // Return a fallback component
      return { 
        default: () => {
          const handleRetry = () => window.location.reload();
          
          return React.createElement('div', {
            className: "min-h-screen flex items-center justify-center"
          }, 
            React.createElement('div', {
              className: "text-center"
            },
              React.createElement('p', {
                className: "text-gray-600"
              }, "Failed to load component"),
              React.createElement('button', {
                onClick: handleRetry,
                className: "mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              }, "Retry")
            )
          );
        }
      };
    })
  );
};

// Preload function for critical routes
export const preloadRoute = (routeImport: () => Promise<any>) => {
  // Only preload if the user is likely to navigate (on hover, focus, etc.)
  routeImport().then(module => {
    // Component is now cached
    console.log('Route preloaded successfully');
  }).catch(error => {
    console.warn('Failed to preload route:', error);
  });
};
