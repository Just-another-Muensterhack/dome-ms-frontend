import Link from 'next/link'
import { Card, Chip } from '@helpwave/hightide'
import type { Domain } from '@/api/useDomainsQuery'

type DomainCardProps = {
  domain: Domain,
}

export const DomainCard = ({
  domain,
}: DomainCardProps) => {
  const deployedWebsite = domain.deployedWebsite

  return (
    <Card
      id={domain.id}
      title={<span className="block truncate">{domain.url}</span>}
      className="h-full [&_.card-header]:min-h-0 [&_.card-header]:items-start"
      trailing={(
        <Chip
          color={domain.verified ? 'positive' : 'neutral'}
          coloringStyle="tonal"
          size="sm"
        >
          {domain.verified ? 'Verified' : 'Unverified'}
        </Chip>
      )}
    >
      {deployedWebsite ? (
        <Link
          href={`/websites#${deployedWebsite.id}`}
          className="typography-body text-primary hover:underline"
        >
          {deployedWebsite.name}
        </Link>
      ) : (
        <p className="typography-body text-description">Custom</p>
      )}
    </Card>
  )
}
