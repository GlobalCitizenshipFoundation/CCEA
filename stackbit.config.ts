
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'vite',
  nodeVersion: '18',
  contentSources: [
    {
      name: 'content',
      type: 'files',
      rootPath: './content',
      extensions: ['.json', '.md'],
      exclude: ['node_modules/**']
    }
  ],
  models: {
    page: {
      type: 'page',
      urlPath: '/{slug}',
      filePath: 'content/pages/{slug}.json',
      fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'slug', type: 'slug', required: true },
        { name: 'description', type: 'text' },
        { name: 'content', type: 'rich-text' },
        { name: 'publishDate', type: 'datetime' },
        { name: 'lastModified', type: 'datetime' },
        { name: 'featured', type: 'boolean' }
      ]
    },
    article: {
      type: 'data',
      filePath: 'content/articles/{slug}.json',
      fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'slug', type: 'slug', required: true },
        { name: 'excerpt', type: 'text' },
        { name: 'content', type: 'rich-text' },
        { name: 'author', type: 'object', fields: [
          { name: 'name', type: 'string' },
          { name: 'title', type: 'string' },
          { name: 'profileImage', type: 'image' },
          { name: 'bio', type: 'text' }
        ]},
        { name: 'publishDate', type: 'datetime' },
        { name: 'lastModified', type: 'datetime' },
        { name: 'categories', type: 'list', items: { type: 'string' } },
        { name: 'tags', type: 'list', items: { type: 'string' } },
        { name: 'readTime', type: 'number' },
        { name: 'featuredImage', type: 'image' },
        { name: 'featured', type: 'boolean' }
      ]
    },
    event: {
      type: 'data',
      filePath: 'content/events/{slug}.json',
      fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'slug', type: 'slug', required: true },
        { name: 'description', type: 'text' },
        { name: 'eventType', type: 'enum', options: ['conference', 'workshop', 'webinar', 'meeting'] },
        { name: 'startDate', type: 'datetime' },
        { name: 'endDate', type: 'datetime' },
        { name: 'timezone', type: 'string' },
        { name: 'location', type: 'object', fields: [
          { name: 'venue', type: 'string' },
          { name: 'address', type: 'string' },
          { name: 'city', type: 'string' },
          { name: 'country', type: 'string' }
        ]},
        { name: 'isVirtual', type: 'boolean' },
        { name: 'featuredImage', type: 'image' },
        { name: 'content', type: 'rich-text' },
        { name: 'status', type: 'enum', options: ['upcoming', 'ongoing', 'completed', 'cancelled'] }
      ]
    },
    resource: {
      type: 'data',
      filePath: 'content/resources/{slug}.json',
      fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'slug', type: 'slug', required: true },
        { name: 'description', type: 'text' },
        { name: 'resourceType', type: 'enum', options: ['guide', 'toolkit', 'template', 'report', 'presentation'] },
        { name: 'category', type: 'string' },
        { name: 'subcategory', type: 'string' },
        { name: 'accessType', type: 'enum', options: ['free', 'member', 'premium'] },
        { name: 'fileInfo', type: 'object', fields: [
          { name: 'fileType', type: 'string' },
          { name: 'fileSize', type: 'string' },
          { name: 'downloadUrl', type: 'string' }
        ]},
        { name: 'content', type: 'rich-text' },
        { name: 'thumbnail', type: 'image' },
        { name: 'featured', type: 'boolean' }
      ]
    },
    teamMember: {
      type: 'data',
      filePath: 'content/team/{slug}.json',
      fields: [
        { name: 'name', type: 'string', required: true },
        { name: 'slug', type: 'slug', required: true },
        { name: 'title', type: 'string' },
        { name: 'department', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'profileImage', type: 'image' },
        { name: 'bio', type: 'rich-text' },
        { name: 'shortBio', type: 'text' },
        { name: 'expertise', type: 'list', items: { type: 'string' } },
        { name: 'contactInfo', type: 'object', fields: [
          { name: 'email', type: 'string' },
          { name: 'phone', type: 'string' }
        ]},
        { name: 'featured', type: 'boolean' }
      ]
    }
  }
});
