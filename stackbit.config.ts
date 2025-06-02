
import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "slug", required: true },
            { name: "description", type: "text" },
            { name: "content", type: "markdown" },
            { name: "publishDate", type: "datetime" },
            { name: "featured", type: "boolean" }
          ]
        },
        {
          name: "Article",
          type: "page",
          urlPath: "/articles/{slug}",
          filePath: "content/articles/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "slug", required: true },
            { name: "excerpt", type: "text" },
            { name: "content", type: "markdown" },
            { name: "author", type: "reference", models: ["TeamMember"] },
            { name: "publishDate", type: "datetime" },
            { name: "categories", type: "list", items: { type: "string" } },
            { name: "tags", type: "list", items: { type: "string" } },
            { name: "featuredImage", type: "image" },
            { name: "featured", type: "boolean" }
          ]
        },
        {
          name: "Event",
          type: "page",
          urlPath: "/events/{slug}",
          filePath: "content/events/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "slug", required: true },
            { name: "description", type: "text" },
            { name: "eventType", type: "string" },
            { name: "startDate", type: "datetime" },
            { name: "endDate", type: "datetime" },
            { name: "location", type: "object", fields: [
              { name: "venue", type: "string" },
              { name: "city", type: "string" },
              { name: "country", type: "string" }
            ]},
            { name: "isVirtual", type: "boolean" },
            { name: "featuredImage", type: "image" },
            { name: "status", type: "string" }
          ]
        },
        {
          name: "Member",
          type: "page",
          urlPath: "/members/{slug}",
          filePath: "content/members/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "slug", type: "slug", required: true },
            { name: "memberType", type: "string" },
            { name: "membershipLevel", type: "string" },
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "bio", type: "markdown" },
            { name: "logo", type: "image" },
            { name: "location", type: "object", fields: [
              { name: "city", type: "string" },
              { name: "country", type: "string" },
              { name: "region", type: "string" }
            ]},
            { name: "contactInfo", type: "object", fields: [
              { name: "email", type: "email" },
              { name: "website", type: "url" },
              { name: "phone", type: "string" }
            ]},
            { name: "memberSince", type: "date" },
            { name: "expertise", type: "list", items: { type: "string" } },
            { name: "featured", type: "boolean" },
            { name: "publicProfile", type: "boolean" }
          ]
        },
        {
          name: "Resource",
          type: "page",
          urlPath: "/resources/{slug}",
          filePath: "content/resources/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "slug", required: true },
            { name: "description", type: "text" },
            { name: "resourceType", type: "string" },
            { name: "category", type: "string" },
            { name: "accessType", type: "string" },
            { name: "content", type: "markdown" },
            { name: "thumbnail", type: "image" },
            { name: "fileInfo", type: "object", fields: [
              { name: "fileType", type: "string" },
              { name: "fileSize", type: "string" },
              { name: "downloadUrl", type: "url" }
            ]},
            { name: "author", type: "reference", models: ["TeamMember"] },
            { name: "lastUpdated", type: "datetime" },
            { name: "featured", type: "boolean" }
          ]
        },
        {
          name: "TeamMember",
          type: "page",
          urlPath: "/team/{slug}",
          filePath: "content/team/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "slug", type: "slug", required: true },
            { name: "title", type: "string" },
            { name: "department", type: "string" },
            { name: "bio", type: "markdown" },
            { name: "shortBio", type: "text" },
            { name: "profileImage", type: "image" },
            { name: "expertise", type: "list", items: { type: "string" } },
            { name: "education", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "degree", type: "string" },
                { name: "institution", type: "string" },
                { name: "year", type: "string" }
              ]
            }},
            { name: "socialLinks", type: "object", fields: [
              { name: "linkedin", type: "url" },
              { name: "twitter", type: "url" },
              { name: "researchGate", type: "url" }
            ]},
            { name: "contactInfo", type: "object", fields: [
              { name: "email", type: "email" },
              { name: "phone", type: "string" }
            ]},
            { name: "featured", type: "boolean" }
          ]
        }
      ],
    })
  ],
  siteMap: ({ documents, models }) => {
    const pageModels = models.filter((m) => m.type === "page");
    
    return documents
      .filter((d) => pageModels.some(m => m.name === d.modelName))
      .map((document) => {
        const urlPath = (() => {
          switch (document.modelName) {
            case 'Page':
              // Handle special cases for main pages
              if (document.id === 'home') return '/';
              if (document.id === 'about') return '/about';
              if (document.id === 'contact') return '/contact';
              if (document.id === 'membership') return '/membership';
              if (document.id === 'governance') return '/governance';
              if (document.id === 'governance-charter') return '/governance-charter';
              if (document.id === 'impressum') return '/impressum';
              if (document.id === 'brand-guidelines') return '/brand-guidelines';
              return `/${document.id}`;
            case 'Article':
              return `/articles/${document.id}`;
            case 'Event':
              return `/events/${document.id}`;
            case 'Member':
              return `/members/${document.id}`;
            case 'Resource':
              return `/resources/${document.id}`;
            case 'TeamMember':
              return `/team/${document.id}`;
            default:
              return `/${document.id}`;
          }
        })();

        return {
          stableId: document.id,
          urlPath,
          document,
          isHomePage: document.modelName === 'Page' && document.id === 'home',
        };
      })
      .filter(Boolean) as SiteMapEntry[];
  },
  presetSource: {
    type: "files",
    referenceType: "static"
  }
});
