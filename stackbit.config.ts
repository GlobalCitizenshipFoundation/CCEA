import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom', // changed from 'vite' to 'custom' to match allowed values
  nodeVersion: '18',
  
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/{slug}',
          filePath: 'content/pages/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string' },
            { name: 'featuredImage', type: 'image' },
            { name: 'content', type: 'markdown' },
            { name: 'lastUpdated', type: 'datetime' }
          ]
        },
        {
          name: 'Article',
          type: 'page',
          urlPath: '/articles/{slug}',
          filePath: 'content/articles/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'excerpt', type: 'markdown' },
            { name: 'author', type: 'string' },
            { name: 'date', type: 'datetime' },
            { name: 'category', type: 'string' },
            { name: 'readTime', type: 'string' },
            { name: 'featured', type: 'boolean' },
            { name: 'content', type: 'markdown' }
          ]
        },
        {
          name: 'Event',
          type: 'page',
          urlPath: '/events/{slug}',
          filePath: 'content/events/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string' },
            { name: 'eventType', type: 'string' },
            { name: 'startDate', type: 'datetime' },
            { name: 'endDate', type: 'datetime' },
            { name: 'location', type: 'object', fields: [
              { name: 'venue', type: 'string' },
              { name: 'address', type: 'string' },
              { name: 'city', type: 'string' },
              { name: 'country', type: 'string' }
            ]},
            { name: 'featuredImage', type: 'image' },
            { name: 'status', type: 'string' }
          ]
        },
        {
          name: 'Resource',
          type: 'page',
          urlPath: '/resources/{slug}',
          filePath: 'content/resources/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string' },
            { name: 'category', type: 'string' },
            { name: 'resourceType', type: 'string' },
            { name: 'downloadCount', type: 'number' },
            { name: 'featured', type: 'boolean' },
            { name: 'content', type: 'markdown' },
            { name: 'lastUpdated', type: 'datetime' }
          ]
        },
        {
          name: 'Member',
          type: 'page',
          urlPath: '/members/{slug}',
          filePath: 'content/members/{slug}.json',
          fields: [
            { name: 'name', type: 'string', required: true },
            { name: 'memberType', type: 'string' },
            { name: 'membershipLevel', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'bio', type: 'markdown' },
            { name: 'location', type: 'object', fields: [
              { name: 'city', type: 'string' },
              { name: 'country', type: 'string' },
              { name: 'region', type: 'string' }
            ]},
            { name: 'expertise', type: 'list', items: { type: 'string' } },
            { name: 'featured', type: 'boolean' }
          ]
        },
        {
          name: 'TeamMember',
          type: 'page',
          urlPath: '/team/{slug}',
          filePath: 'content/team/{slug}.json',
          fields: [
            { name: 'name', type: 'string', required: true },
            { name: 'title', type: 'string' },
            { name: 'department', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'image', type: 'image' },
            { name: 'bio', type: 'markdown' },
            { name: 'lastUpdated', type: 'datetime' }
          ]
        },
        {
          name: 'GovernanceDoc',
          type: 'page',
          urlPath: '/governance/{slug}',
          filePath: 'content/governance/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string' },
            { name: 'category', type: 'string' },
            { name: 'content', type: 'markdown' },
            { name: 'lastUpdated', type: 'datetime' }
          ]
        }
      ],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
      }
    })
  ],

  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === 'page')
    return documents
      .filter((d) => pageModels.some(m => m.name === d.modelName))
      .map((document) => {
        let urlPath = '/'
        let isHomePage = false
        // Try to extract slug as string from document.fields.slug
        let slug: string | undefined = undefined;
        if (document.fields?.slug) {
          if (typeof document.fields.slug === 'string') {
            slug = document.fields.slug;
          } else if ('value' in document.fields.slug && typeof document.fields.slug.value === 'string') {
            slug = document.fields.slug.value;
          }
        }
        switch (document.modelName) {
          case 'Page':
            if (slug === 'home') {
              urlPath = '/'
              isHomePage = true
            } else {
              urlPath = `/${slug}`
            }
            break
          case 'Article':
            urlPath = `/articles/${slug}`
            break
          case 'Event':
            urlPath = `/events/${slug}`
            break
          case 'Resource':
            urlPath = `/resources/${slug}`
            break
          case 'Member':
            urlPath = `/members/${slug}`
            break
          case 'TeamMember':
            urlPath = `/team/${slug}`
            break
          case 'GovernanceDoc':
            urlPath = `/governance/${slug}`
            break
          default:
            return null
        }
        return {
          stableId: document.id,
          urlPath,
          document,
          isHomePage,
        }
      })
      .filter(Boolean) as SiteMapEntry[]
  }
})
