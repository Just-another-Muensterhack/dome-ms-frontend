import { Card } from '@helpwave/hightide'
import type { Website } from '@/api/useWebsites'
import { WebsiteDeployments } from '@/components/websites/WebsiteDeployments'

type WebsiteCardProps = {
  website: Website,
}

export const WebsiteCard = ({
  website,
}: WebsiteCardProps) => {
  return (
    <Card id={website.id} title={website.name} className="h-full">
      <WebsiteDeployments
        websiteName={website.name}
        deployments={website.deployedTo}
      />
    </Card>
  )
}
