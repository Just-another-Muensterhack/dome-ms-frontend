import { LoadingAndErrorComponent } from '@helpwave/hightide'
import { useDomainsQuery } from '@/api/useDomainsQuery'
import { DomainCard } from '@/components/domains/DomainCard'

export const DomainsContent = () => {
  const domainsQuery = useDomainsQuery()
  const domains = domainsQuery.data?.domains ?? []

  return (
    <div className="flex-col-4">
      <h1 className="typography-title-lg">Domains</h1>
      <LoadingAndErrorComponent
        isLoading={domainsQuery.isPending}
        hasError={domainsQuery.isError}
        loadingComponent={<p className="typography-body text-description">Loading domains</p>}
        errorComponent={<p className="typography-body text-description">Domains are unavailable.</p>}
      >
        {domains.length === 0 && (
          <p className="typography-body text-description">You do not own any domains.</p>
        )}
        {domains.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {domains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>
        )}
      </LoadingAndErrorComponent>
    </div>
  )
}
