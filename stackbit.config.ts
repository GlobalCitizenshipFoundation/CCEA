
import { defineStackbitConfig } from '@stackbit/types'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'vite',
  nodeVersion: '18',
  
  contentSources: [
    {
      name: 'sanity',
      type: 'sanity',
      parameters: {
        projectId: process.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
        dataset: process.env.VITE_SANITY_DATASET || 'production',
        apiVersion: '2024-01-01'
      }
    }
  ],

  modelExtensions: [
    {
      name: 'page',
      type: 'page',
      urlPath: '/{slug}'
    },
    {
      name: 'article',
      type: 'page', 
      urlPath: '/articles/{slug}'
    },
    {
      name: 'event',
      type: 'page',
      urlPath: '/events/{slug}' 
    },
    {
      name: 'resource',
      type: 'page',
      urlPath: '/resources/{slug}'
    },
    {
      name: 'member',
      type: 'page',
      urlPath: '/members/{slug}'
    },
    {
      name: 'teamMember',
      type: 'page',
      urlPath: '/team/{slug}'
    }
  ],

  presetSource: {
    type: 'files',
    staticDir: 'public',
    uploadDir: 'images',
    assetsRef: 'relative'
  }
})
