import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
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
            { name: "lastUpdated", type: "date" }
          ]
        },
        {
          name: "Article",
          type: "page",
          urlPath: "/articles/{slug}",
          filePath: "content/articles/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "excerpt", type: "string" },
            { name: "author", type: "reference", models: ["TeamMember"], required: true },
            { name: "date", type: "date", required: true },
            { name: "categories", type: "list", items: { type: "string" } },
            { name: "tags", type: "list", items: { type: "string" } },
            { name: "readTime", type: "string" },
            { name: "featured", type: "boolean", default: false },
            { name: "featuredImage", type: "image" },
            { name: "content", type: "markdown", required: true },
            { name: "relatedArticles", type: "list", items: { type: "reference", models: ["Article"] } },
            { name: "socialSharing", type: "boolean", default: true }
          ]
        },
        {
          name: "Resource",
          type: "page",
          urlPath: "/resources/{slug}",
          filePath: "content/resources/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "resourceType", type: "string", required: true },
            { name: "category", type: "string", required: true },
            { name: "fileType", type: "string" },
            { name: "fileSize", type: "string" },
            { name: "downloadUrl", type: "string" },
            { name: "downloadCount", type: "number", default: 0 },
            { name: "featured", type: "boolean", default: false },
            { name: "content", type: "markdown", required: true },
            { name: "lastUpdated", type: "date" },
            { name: "thumbnail", type: "image" },
            { name: "author", type: "reference", models: ["TeamMember"] }
          ]
        },
        {
          name: "Event",
          type: "page",
          urlPath: "/events/{slug}",
          filePath: "content/events/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "startDate", type: "date", required: true },
            { name: "endDate", type: "date", required: true },
            { name: "location", type: "object", fields: [
              { name: "venue", type: "string" },
              { name: "address", type: "string" },
              { name: "city", type: "string" },
              { name: "country", type: "string" },
              { name: "coordinates", type: "object", fields: [
                { name: "lat", type: "number" },
                { name: "lng", type: "number" }
              ]}
            ]},
            { name: "isVirtual", type: "boolean", default: false },
            { name: "registrationUrl", type: "string" },
            { name: "capacity", type: "number" },
            { name: "registered", type: "number", default: 0 },
            { name: "speakers", type: "list", items: { type: "reference", models: ["TeamMember"] } },
            { name: "agenda", type: "markdown" },
            { name: "featuredImage", type: "image" },
            { name: "content", type: "markdown", required: true },
            { name: "calendarLink", type: "string" },
            { name: "status", type: "enum", options: ["upcoming", "ongoing", "past", "cancelled"] }
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
            { name: "organization", type: "string" },
            { name: "title", type: "string" },
            { name: "profileImage", type: "image" },
            { name: "logo", type: "image" },
            { name: "description", type: "string" },
            { name: "bio", type: "markdown" },
            { name: "location", type: "object", fields: [
              { name: "city", type: "string" },
              { name: "country", type: "string" }
            ]},
            { name: "contactInfo", type: "object", fields: [
              { name: "email", type: "string" },
              { name: "phone", type: "string" },
              { name: "website", type: "string" }
            ]},
            { name: "socialLinks", type: "object", fields: [
              { name: "linkedin", type: "string" },
              { name: "twitter", type: "string" },
              { name: "facebook", type: "string" }
            ]},
            { name: "memberSince", type: "date" },
            { name: "expertise", type: "list", items: { type: "string" } },
            { name: "featured", type: "boolean", default: false }
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
            { name: "profileImage", type: "image" },
            { name: "photoGallery", type: "list", items: { type: "image" } },
            { name: "bio", type: "markdown" },
            { name: "shortBio", type: "string" },
            { name: "expertise", type: "list", items: { type: "string" } },
            { name: "education", type: "list", items: { type: "string" } },
            { name: "publications", type: "list", items: { type: "string" } },
            { name: "socialLinks", type: "object", fields: [
              { name: "linkedin", type: "string" },
              { name: "twitter", type: "string" },
              { name: "researchGate", type: "string" }
            ]},
            { name: "contactInfo", type: "object", fields: [
              { name: "email", type: "string" },
              { name: "phone", type: "string" }
            ]},
            { name: "featured", type: "boolean", default: false },
            { name: "lastUpdated", type: "date" }
          ]
        },
        {
          name: "GovernanceDoc",
          type: "page",
          urlPath: "/governance/{slug}",
          filePath: "content/governance/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "category", type: "string", required: true },
            { name: "members", type: "list", items: { 
              type: "object", 
              fields: [
                { name: "member", type: "reference", models: ["TeamMember"] },
                { name: "role", type: "string" },
                { name: "responsibilities", type: "markdown" },
                { name: "term", type: "object", fields: [
                  { name: "start", type: "date" },
                  { name: "end", type: "date" }
                ]}
              ]
            }},
            { name: "content", type: "markdown", required: true },
            { name: "lastUpdated", type: "date", required: true }
          ]
        }
      ]
    })
  ]
});