
import { useQuery } from '@tanstack/react-query'
import { sanityClient, queries } from '@/lib/sanity'

export function useContent(queryKey: string, query: string, params?: any) {
  return useQuery({
    queryKey: [queryKey, params],
    queryFn: () => sanityClient.fetch(query, params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  })
}

export function usePages() {
  return useContent('pages', queries.pages)
}

export function usePageBySlug(slug: string) {
  return useContent('page', queries.pageBySlug, { slug })
}

export function useArticles() {
  return useContent('articles', queries.articles)
}

export function useArticleBySlug(slug: string) {
  return useContent('article', queries.articleBySlug, { slug })
}

export function useEvents() {
  return useContent('events', queries.events)
}

export function useEventBySlug(slug: string) {
  return useContent('event', queries.eventBySlug, { slug })
}

export function useResources() {
  return useContent('resources', queries.resources)
}

export function useResourceBySlug(slug: string) {
  return useContent('resource', queries.resourceBySlug, { slug })
}

export function useMembers() {
  return useContent('members', queries.members)
}

export function useMemberBySlug(slug: string) {
  return useContent('member', queries.memberBySlug, { slug })
}

export function useTeamMembers() {
  return useContent('teamMembers', queries.teamMembers)
}

export function useTeamMemberBySlug(slug: string) {
  return useContent('teamMember', queries.teamMemberBySlug, { slug })
}

export function useSettings() {
  return useContent('settings', queries.settings)
}

export function useFeaturedContent() {
  return useContent('featuredContent', queries.featuredContent)
}
