import type { Domain } from '@/api/useDomainsQuery'

const maxDomainChips = 5

export type DomainChipPreview = {
  visible: Domain[],
  hiddenCount: number,
}

export const domainChipPreview = (domains: Domain[]): DomainChipPreview => {
  if (domains.length <= maxDomainChips) {
    return {
      visible: domains,
      hiddenCount: 0,
    }
  }

  const visibleCount = maxDomainChips - 1
  return {
    visible: domains.slice(0, visibleCount),
    hiddenCount: domains.length - visibleCount,
  }
}

export const domainsMatchingUrl = (domains: Domain[], query: string): Domain[] => {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) {
    return domains
  }

  return domains.filter((domain) => domain.url.toLowerCase().includes(normalizedQuery))
}

export const domainsForWebsite = (domains: Domain[], websiteId: string): Domain[] => (
  domains.filter((domain) => domain.deployedWebsite?.id === websiteId)
)
