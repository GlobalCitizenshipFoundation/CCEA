
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
})

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries for content
export const queries = {
  pages: `*[_type == "page" && published == true] | order(_createdAt desc)`,
  pageBySlug: `*[_type == "page" && slug.current == $slug && published == true][0]`,
  articles: `*[_type == "article"] | order(publishDate desc)`,
  articleBySlug: `*[_type == "article" && slug.current == $slug][0]`,
  events: `*[_type == "event"] | order(startDate asc)`,
  eventBySlug: `*[_type == "event" && slug.current == $slug][0]`,
  resources: `*[_type == "resource"] | order(lastUpdated desc)`,
  resourceBySlug: `*[_type == "resource" && slug.current == $slug][0]`,
  members: `*[_type == "member" && publicProfile == true] | order(memberSince desc)`,
  memberBySlug: `*[_type == "member" && slug.current == $slug && publicProfile == true][0]`,
  teamMembers: `*[_type == "teamMember"] | order(order asc)`,
  teamMemberBySlug: `*[_type == "teamMember" && slug.current == $slug][0]`,
  settings: `*[_type == "settings"][0]`,
  featuredContent: `{
    "articles": *[_type == "article" && featured == true] | order(publishDate desc)[0...3],
    "events": *[_type == "event" && status == "upcoming"] | order(startDate asc)[0...3],
    "resources": *[_type == "resource" && featured == true] | order(lastUpdated desc)[0...3]
  }`
}
