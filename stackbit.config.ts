
import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types'
import { sanitySource } from '@stackbit/cms-sanity'

const config = defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  devCommand: 'npm run dev',
  experimental: {
    ssg: {
      name: 'vite',
      logPatterns: {
        up: ['Local:', 'ready in']
      },
      directoryChangeInvalidation: true
    }
  },
  contentSources: [
    sanitySource({
      projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
      dataset: process.env.SANITY_STUDIO_DATASET || 'production',
      studioUrl: '/admin',
      previewMode: 'live'
    })
  ],
  mapStyles: (styles) => styles,
  presetSource: {
    type: 'contentful',
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID!,
    contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    contentfulPreviewToken: process.env.CONTENTFUL_PREVIEW_TOKEN!
  },
  models: {
    page: { type: 'page' },
    article: { type: 'data' },
    event: { type: 'data' },
    resource: { type: 'data' },
    member: { type: 'data' },
    teamMember: { type: 'data' },
    settings: { type: 'data' }
  }
})

export default config
