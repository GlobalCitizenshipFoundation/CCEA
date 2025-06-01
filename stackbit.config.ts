
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  devCommand: 'npm run dev',
  experimental: {
    ssg: {
      name: 'Vite',
      logPatterns: {
        up: ['Local:', 'ready in', 'localhost']
      },
      directoryChangeCommand: 'npm run dev'
    }
  },
  modelExtensions: [
    {
      name: 'page',
      type: 'page',
      urlPath: '/{slug}',
      filePath: 'content/pages/{slug}.json'
    },
    {
      name: 'article',
      type: 'page',
      urlPath: '/articles/{slug}',
      filePath: 'content/articles/{slug}.json'
    },
    {
      name: 'event',
      type: 'page', 
      urlPath: '/events/{slug}',
      filePath: 'content/events/{slug}.json'
    },
    {
      name: 'resource',
      type: 'page',
      urlPath: '/resources/{slug}',
      filePath: 'content/resources/{slug}.json'
    },
    {
      name: 'member',
      type: 'page',
      urlPath: '/members/{slug}',
      filePath: 'content/members/{slug}.json'
    },
    {
      name: 'teamMember',
      type: 'page',
      urlPath: '/team/{slug}',
      filePath: 'content/team/{slug}.json'
    }
  ],
  contentSources: [
    {
      name: 'local',
      type: 'files',
      rootPath: __dirname,
      contentPath: 'content',
      dataPath: 'content/config.json',
      staticPath: 'public'
    }
  ],
  models: {
    page: {
      type: 'page',
      label: 'Page',
      fields: [
        { name: 'title', type: 'string', label: 'Title', required: true },
        { name: 'slug', type: 'slug', label: 'URL Slug', required: true },
        { name: 'description', type: 'text', label: 'Description' },
        { name: 'featuredImage', type: 'image', label: 'Featured Image' },
        { name: 'content', type: 'markdown', label: 'Content' },
        { name: 'seoTitle', type: 'string', label: 'SEO Title' },
        { name: 'seoDescription', type: 'text', label: 'SEO Description' },
        { name: 'published', type: 'boolean', label: 'Published', default: true }
      ]
    },
    article: {
      type: 'page',
      label: 'Article',
      fields: [
        { name: 'title', type: 'string', label: 'Title', required: true },
        { name: 'slug', type: 'slug', label: 'URL Slug', required: true },
        { name: 'excerpt', type: 'text', label: 'Excerpt' },
        { name: 'featuredImage', type: 'image', label: 'Featured Image' },
        { name: 'author', type: 'object', label: 'Author', fields: [
          { name: 'name', type: 'string', label: 'Name' },
          { name: 'title', type: 'string', label: 'Title' },
          { name: 'bio', type: 'text', label: 'Bio' },
          { name: 'profileImage', type: 'image', label: 'Profile Image' }
        ]},
        { name: 'publishDate', type: 'datetime', label: 'Publish Date', required: true },
        { name: 'lastModified', type: 'datetime', label: 'Last Modified' },
        { name: 'categories', type: 'list', label: 'Categories', items: { type: 'string' }},
        { name: 'tags', type: 'list', label: 'Tags', items: { type: 'string' }},
        { name: 'readTime', type: 'number', label: 'Read Time (minutes)' },
        { name: 'content', type: 'markdown', label: 'Content' },
        { name: 'featured', type: 'boolean', label: 'Featured Article', default: false },
        { name: 'socialSharing', type: 'boolean', label: 'Enable Social Sharing', default: true }
      ]
    },
    event: {
      type: 'page',
      label: 'Event',
      fields: [
        { name: 'title', type: 'string', label: 'Title', required: true },
        { name: 'slug', type: 'slug', label: 'URL Slug', required: true },
        { name: 'description', type: 'text', label: 'Description' },
        { name: 'eventType', type: 'enum', label: 'Event Type', options: ['conference', 'workshop', 'webinar', 'training', 'networking']},
        { name: 'startDate', type: 'datetime', label: 'Start Date', required: true },
        { name: 'endDate', type: 'datetime', label: 'End Date', required: true },
        { name: 'timezone', type: 'string', label: 'Timezone', default: 'Europe/Brussels' },
        { name: 'isVirtual', type: 'boolean', label: 'Virtual Event', default: false },
        { name: 'virtualPlatform', type: 'string', label: 'Virtual Platform' },
        { name: 'location', type: 'object', label: 'Location', fields: [
          { name: 'venue', type: 'string', label: 'Venue' },
          { name: 'address', type: 'string', label: 'Address' },
          { name: 'city', type: 'string', label: 'City' },
          { name: 'country', type: 'string', label: 'Country' }
        ]},
        { name: 'featuredImage', type: 'image', label: 'Featured Image' },
        { name: 'content', type: 'markdown', label: 'Content' },
        { name: 'capacity', type: 'number', label: 'Capacity' },
        { name: 'registered', type: 'number', label: 'Registered', default: 0 },
        { name: 'status', type: 'enum', label: 'Status', options: ['upcoming', 'ongoing', 'completed', 'cancelled'], default: 'upcoming' }
      ]
    },
    resource: {
      type: 'page',
      label: 'Resource',
      fields: [
        { name: 'title', type: 'string', label: 'Title', required: true },
        { name: 'slug', type: 'slug', label: 'URL Slug', required: true },
        { name: 'description', type: 'text', label: 'Description' },
        { name: 'resourceType', type: 'enum', label: 'Resource Type', options: ['toolkit', 'guide', 'template', 'research', 'case-study']},
        { name: 'category', type: 'string', label: 'Category' },
        { name: 'subcategory', type: 'string', label: 'Subcategory' },
        { name: 'accessType', type: 'enum', label: 'Access Type', options: ['free', 'members', 'premium'], default: 'free' },
        { name: 'fileInfo', type: 'object', label: 'File Information', fields: [
          { name: 'fileType', type: 'string', label: 'File Type' },
          { name: 'fileSize', type: 'string', label: 'File Size' },
          { name: 'downloadUrl', type: 'url', label: 'Download URL' },
          { name: 'previewUrl', type: 'url', label: 'Preview URL' }
        ]},
        { name: 'thumbnail', type: 'image', label: 'Thumbnail' },
        { name: 'author', type: 'object', label: 'Author', fields: [
          { name: 'name', type: 'string', label: 'Name' },
          { name: 'title', type: 'string', label: 'Title' },
          { name: 'profileImage', type: 'image', label: 'Profile Image' }
        ]},
        { name: 'content', type: 'markdown', label: 'Content' },
        { name: 'lastUpdated', type: 'datetime', label: 'Last Updated', required: true },
        { name: 'featured', type: 'boolean', label: 'Featured Resource', default: false }
      ]
    },
    member: {
      type: 'page',
      label: 'Member',
      fields: [
        { name: 'name', type: 'string', label: 'Name', required: true },
        { name: 'slug', type: 'slug', label: 'URL Slug', required: true },
        { name: 'memberType', type: 'enum', label: 'Member Type', options: ['institutional', 'associate', 'individual']},
        { name: 'membershipLevel', type: 'enum', label: 'Membership Level', options: ['full', 'associate', 'honorary']},
        { name: 'title', type: 'string', label: 'Title/Role' },
        { name: 'logo', type: 'image', label: 'Logo/Profile Image' },
        { name: 'description', type: 'text', label: 'Short Description' },
        { name: 'bio', type: 'markdown', label: 'Full Bio' },
        { name: 'location', type: 'object', label: 'Location', fields: [
          { name: 'city', type: 'string', label: 'City' },
          { name: 'country', type: 'string', label: 'Country' },
          { name: 'region', type: 'string', label: 'Region' }
        ]},
        { name: 'contactInfo', type: 'object', label: 'Contact Information', fields: [
          { name: 'email', type: 'email', label: 'Email' },
          { name: 'phone', type: 'string', label: 'Phone' },
          { name: 'website', type: 'url', label: 'Website' }
        ]},
        { name: 'memberSince', type: 'date', label: 'Member Since', required: true },
        { name: 'expertise', type: 'list', label: 'Areas of Expertise', items: { type: 'string' }},
        { name: 'featured', type: 'boolean', label: 'Featured Member', default: false },
        { name: 'publicProfile', type: 'boolean', label: 'Public Profile', default: true }
      ]
    }
  }
});
