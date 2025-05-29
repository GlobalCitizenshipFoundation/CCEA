import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
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
            { name: "description", type: "string" },
            { name: "featuredImage", type: "image" },
            { name: "content", type: "markdown", required: true },
            { name: "lastUpdated", type: "date" },
            { name: "seo", type: "object", fields: [
              { name: "metaTitle", type: "string" },
              { name: "metaDescription", type: "string" },
              { name: "canonicalUrl", type: "string" },
              { name: "ogImage", type: "image" }
            ]}
          ]
        },
        {
          name: "Article",
          type: "page",
          urlPath: "/articles/{slug}",
          filePath: "content/articles/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "excerpt", type: "string", required: true },
            { name: "author", type: "reference", models: ["TeamMember"], required: true },
            { name: "coAuthors", type: "list", items: { type: "reference", models: ["TeamMember"] } },
            { name: "publishDate", type: "date", required: true },
            { name: "lastModified", type: "date" },
            { name: "categories", type: "list", items: { type: "string" }, required: true },
            { name: "tags", type: "list", items: { type: "string" } },
            { name: "readTime", type: "number", default: 5 },
            { name: "featured", type: "boolean", default: false },
            { name: "featuredImage", type: "image", required: true },
            { name: "content", type: "markdown", required: true },
            { name: "relatedArticles", type: "list", items: { type: "reference", models: ["Article"] } },
            { name: "socialSharing", type: "boolean", default: true },
            { name: "tableOfContents", type: "boolean", default: false },
            { name: "seo", type: "object", fields: [
              { name: "metaTitle", type: "string" },
              { name: "metaDescription", type: "string" },
              { name: "canonicalUrl", type: "string" },
              { name: "ogImage", type: "image" }
            ]},
            { name: "schema", type: "object", fields: [
              { name: "articleType", type: "enum", options: ["Article", "BlogPosting", "NewsArticle", "ScholarlyArticle"], default: "Article" },
              { name: "wordCount", type: "number" },
              { name: "language", type: "string", default: "en" }
            ]}
          ]
        },
        {
          name: "Resource",
          type: "page",
          urlPath: "/resources/{slug}",
          filePath: "content/resources/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "resourceType", type: "enum", options: ["document", "guide", "toolkit", "template", "video", "audio", "interactive"], required: true },
            { name: "category", type: "string", required: true },
            { name: "subcategory", type: "string" },
            { name: "accessType", type: "enum", options: ["free", "members-only", "premium"], default: "free" },
            { name: "fileInfo", type: "object", fields: [
              { name: "fileType", type: "string" },
              { name: "fileSize", type: "string" },
              { name: "downloadUrl", type: "string" },
              { name: "previewUrl", type: "string" },
              { name: "externalUrl", type: "string" }
            ]},
            { name: "downloadCount", type: "number", default: 0 },
            { name: "featured", type: "boolean", default: false },
            { name: "content", type: "markdown", required: true },
            { name: "lastUpdated", type: "date", required: true },
            { name: "thumbnail", type: "image" },
            { name: "gallery", type: "list", items: { type: "image" } },
            { name: "author", type: "reference", models: ["TeamMember"] },
            { name: "contributors", type: "list", items: { type: "reference", models: ["TeamMember"] } },
            { name: "license", type: "object", fields: [
              { name: "type", type: "string" },
              { name: "url", type: "string" },
              { name: "attribution", type: "string" }
            ]},
            { name: "relatedResources", type: "list", items: { type: "reference", models: ["Resource"] } },
            { name: "seo", type: "object", fields: [
              { name: "metaTitle", type: "string" },
              { name: "metaDescription", type: "string" },
              { name: "canonicalUrl", type: "string" },
              { name: "ogImage", type: "image" }
            ]}
          ]
        },
        {
          name: "Event",
          type: "page",
          urlPath: "/events/{slug}",
          filePath: "content/events/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "eventType", type: "enum", options: ["conference", "workshop", "webinar", "seminar", "networking", "training", "ceremony"], required: true },
            { name: "startDate", type: "date", required: true },
            { name: "endDate", type: "date", required: true },
            { name: "timezone", type: "string", default: "Europe/Brussels" },
            { name: "location", type: "object", fields: [
              { name: "venue", type: "string" },
              { name: "address", type: "string" },
              { name: "city", type: "string" },
              { name: "country", type: "string" },
              { name: "postalCode", type: "string" },
              { name: "coordinates", type: "object", fields: [
                { name: "lat", type: "number" },
                { name: "lng", type: "number" }
              ]}
            ]},
            { name: "isVirtual", type: "boolean", default: false },
            { name: "virtualPlatform", type: "string" },
            { name: "registrationInfo", type: "object", fields: [
              { name: "registrationUrl", type: "string" },
              { name: "registrationDeadline", type: "date" },
              { name: "earlyBirdDeadline", type: "date" },
              { name: "fees", type: "object", fields: [
                { name: "regular", type: "number" },
                { name: "earlyBird", type: "number" },
                { name: "student", type: "number" },
                { name: "member", type: "number" }
              ]}
            ]},
            { name: "capacity", type: "number" },
            { name: "registered", type: "number", default: 0 },
            { name: "speakers", type: "list", items: { type: "reference", models: ["TeamMember", "Member"] } },
            { name: "organizers", type: "list", items: { type: "reference", models: ["TeamMember"] } },
            { name: "agenda", type: "markdown" },
            { name: "requirements", type: "markdown" },
            { name: "featuredImage", type: "image" },
            { name: "gallery", type: "list", items: { type: "image" } },
            { name: "content", type: "markdown", required: true },
            { name: "materials", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "title", type: "string" },
                { name: "type", type: "string" },
                { name: "url", type: "string" },
                { name: "description", type: "string" }
              ]
            }},
            { name: "calendarLink", type: "string" },
            { name: "status", type: "enum", options: ["upcoming", "ongoing", "completed", "cancelled"], default: "upcoming" },
            { name: "seo", type: "object", fields: [
              { name: "metaTitle", type: "string" },
              { name: "metaDescription", type: "string" },
              { name: "canonicalUrl", type: "string" },
              { name: "ogImage", type: "image" }
            ]}
          ]
        },
        {
          name: "Member",
          type: "page",
          urlPath: "/members/{slug}",
          filePath: "content/members/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "memberType", type: "enum", options: ["organization", "individual"], required: true },
            { name: "membershipLevel", type: "enum", options: ["full", "associate", "honorary"], required: true },
            { name: "organization", type: "string" },
            { name: "title", type: "string" },
            { name: "profileImage", type: "image" },
            { name: "logo", type: "image" },
            { name: "description", type: "string", required: true },
            { name: "bio", type: "markdown" },
            { name: "location", type: "object", fields: [
              { name: "city", type: "string" },
              { name: "country", type: "string" },
              { name: "region", type: "string" }
            ]},
            { name: "contactInfo", type: "object", fields: [
              { name: "email", type: "string" },
              { name: "phone", type: "string" },
              { name: "website", type: "string" }
            ]},
            { name: "socialLinks", type: "object", fields: [
              { name: "linkedin", type: "string" },
              { name: "twitter", type: "string" },
              { name: "facebook", type: "string" },
              { name: "instagram", type: "string" }
            ]},
            { name: "memberSince", type: "date", required: true },
            { name: "expertise", type: "list", items: { type: "string" } },
            { name: "achievements", type: "list", items: { type: "string" } },
            { name: "contributions", type: "markdown" },
            { name: "featured", type: "boolean", default: false },
            { name: "publicProfile", type: "boolean", default: true },
            { name: "seo", type: "object", fields: [
              { name: "metaTitle", type: "string" },
              { name: "metaDescription", type: "string" },
              { name: "canonicalUrl", type: "string" },
              { name: "ogImage", type: "image" }
            ]}
          ]
        },
        {
          name: "TeamMember",
          type: "page",
          urlPath: "/team/{slug}",
          filePath: "content/team/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "title", type: "string", required: true },
            { name: "department", type: "string" },
            { name: "location", type: "string" },
            { name: "profileImage", type: "image", required: true },
            { name: "photoGallery", type: "list", items: { type: "image" } },
            { name: "bio", type: "markdown", required: true },
            { name: "shortBio", type: "string", required: true },
            { name: "expertise", type: "list", items: { type: "string" }, required: true },
            { name: "education", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "degree", type: "string" },
                { name: "institution", type: "string" },
                { name: "year", type: "string" },
                { name: "field", type: "string" }
              ]
            }},
            { name: "publications", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "title", type: "string" },
                { name: "type", type: "string" },
                { name: "year", type: "string" },
                { name: "url", type: "string" }
              ]
            }},
            { name: "awards", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "title", type: "string" },
                { name: "organization", type: "string" },
                { name: "year", type: "string" }
              ]
            }},
            { name: "socialLinks", type: "object", fields: [
              { name: "linkedin", type: "string" },
              { name: "twitter", type: "string" },
              { name: "researchGate", type: "string" },
              { name: "orcid", type: "string" },
              { name: "googleScholar", type: "string" }
            ]},
            { name: "contactInfo", type: "object", fields: [
              { name: "email", type: "string" },
              { name: "phone", type: "string" },
              { name: "officeHours", type: "string" }
            ]},
            { name: "languages", type: "list", items: { type: "string" } },
            { name: "featured", type: "boolean", default: false },
            { name: "lastUpdated", type: "date" },
            { name: "seo", type: "object", fields: [
              { name: "metaTitle", type: "string" },
              { name: "metaDescription", type: "string" },
              { name: "canonicalUrl", type: "string" },
              { name: "ogImage", type: "image" }
            ]}
          ]
        },
        {
          name: "GovernanceDoc",
          type: "page",
          urlPath: "/governance/{slug}",
          filePath: "content/governance/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string", required: true },
            { name: "category", type: "enum", options: ["board", "committee", "policy", "procedure", "charter"], required: true },
            { name: "members", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "member", type: "reference", models: ["TeamMember"] },
                { name: "role", type: "string" },
                { name: "responsibilities", type: "markdown" },
                { name: "profileImage", type: "image" },
                { name: "term", type: "object", fields: [
                  { name: "start", type: "date" },
                  { name: "end", type: "date" }
                ]},
                { name: "biography", type: "markdown" },
                { name: "expertise", type: "list", items: { type: "string" } }
              ]
            }},
            { name: "content", type: "markdown", required: true },
            { name: "lastUpdated", type: "date", required: true },
            { name: "effectiveDate", type: "date" },
            { name: "reviewDate", type: "date" },
            { name: "documents", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "title", type: "string" },
                { name: "type", type: "string" },
                { name: "url", type: "string" }
              ]
            }},
            { name: "seo", type: "object", fields: [
              { name: "metaTitle", type: "string" },
              { name: "metaDescription", type: "string" },
              { name: "canonicalUrl", type: "string" },
              { name: "ogImage", type: "image" }
            ]}
          ]
        }
      ]
    })
  ]
});
