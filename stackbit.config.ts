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
            { name: "author", type: "string", required: true },
            { name: "date", type: "date", required: true },
            { name: "category", type: "string" },
            { name: "readTime", type: "string" },
            { name: "featured", type: "boolean", default: false },
            { name: "content", type: "markdown", required: true }
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
            { name: "category", type: "string", required: true },
            { name: "type", type: "string", required: true },
            { name: "downloadCount", type: "number", default: 0 },
            { name: "featured", type: "boolean", default: false },
            { name: "content", type: "markdown", required: true },
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
            { name: "lastUpdated", type: "date", required: true },
            { name: "content", type: "markdown", required: true }
          ]
        },
        {
          name: "TeamMember",
          type: "data",
          filePath: "content/team/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "title", type: "string", required: true },
            { name: "location", type: "string" },
            { name: "department", type: "string" },
            { name: "image", type: "image" },
            { name: "bio", type: "markdown" },
            { name: "lastUpdated", type: "date" }
          ]
        }
      ]
    })
  ]
});
