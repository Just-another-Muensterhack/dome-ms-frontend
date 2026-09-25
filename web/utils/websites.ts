import type { Website, WebsiteDeployment } from '@/api/useWebsites'

const previewLimit = 3
const collapsedPreviewCount = 2

export type DeploymentPreview = {
  visible: WebsiteDeployment[],
  hiddenCount: number,
}

export const deploymentPreview = (deployments: WebsiteDeployment[]): DeploymentPreview => {
  if (deployments.length > previewLimit) {
    return {
      visible: deployments.slice(0, collapsedPreviewCount),
      hiddenCount: deployments.length - collapsedPreviewCount,
    }
  }

  return {
    visible: deployments,
    hiddenCount: 0,
  }
}

export const websitesMatchingName = (websites: Website[], query: string): Website[] => {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) {
    return websites
  }

  return websites.filter((website) => website.name.toLowerCase().includes(normalizedQuery))
}
