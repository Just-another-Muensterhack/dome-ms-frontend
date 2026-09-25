import { useRouter } from 'next/router'
import { Card, IconButton } from '@helpwave/hightide'
import { ChartColumnIcon } from 'lucide-react'
import { useDomainsQuery } from '@/api/useDomainsQuery'
import type { Website } from '@/api/useWebsites'
import { WebsiteDomainChips } from '@/components/websites/WebsiteDomainChips'
import { useDomeTranslation } from '@/i18n/useDomeTranslation'
import { domainsForWebsite } from '@/utils/domains'

type WebsiteCardProps = {
  website: Website,
}

export const WebsiteCard = ({
  website,
}: WebsiteCardProps) => {
  const router = useRouter()
  const translation = useDomeTranslation()
  const domains = useDomainsQuery()
  const websiteDomains = domainsForWebsite(domains.data?.domains ?? [], website.id)

  return (
    <Card
      id={website.id}
      title={website.name}
      className="flex-col justify-start"
      trailing={(
        <IconButton
          size="sm"
          color="primary"
          coloringStyle="text"
          tooltip={translation('analyticsFor', { name: website.name })}
          onClick={() => {
            void router.push(`/analytics/${website.id}`)
          }}
        >
          <ChartColumnIcon className="size-5" />
        </IconButton>
      )}
    >
      <WebsiteDomainChips websiteName={website.name} domains={websiteDomains} />
    </Card>
  )
}
