
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom'],
          // Router chunk
          router: ['react-router-dom'],
          // UI libraries chunk
          'ui-vendor': [
            '@radix-ui/react-slot', 
            '@radix-ui/react-toast',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu'
          ],
          // Icons chunk
          icons: ['lucide-react'],
          // Query client chunk
          'query-vendor': ['@tanstack/react-query'],
          // Form libraries chunk
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Utility libraries chunk
          'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge', 'date-fns'],
          // Security utilities chunk
          'security-vendor': ['dompurify']
        },
      },
    },
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : [],
      },
      mangle: {
        safari10: true,
      },
    },
    // Enable tree shaking
    treeshake: {
      preset: 'recommended',
      moduleSideEffects: false,
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react'
    ],
    exclude: [
      // Exclude large libraries that aren't used on every page
      '@radix-ui/react-accordion',
      '@radix-ui/react-calendar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible'
    ]
  },
}));
