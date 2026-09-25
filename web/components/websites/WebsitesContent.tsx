import { useState } from 'react'
import { LoadingAndErrorComponent, SearchBar } from '@helpwave/hightide'
import { useWebsites } from '@/api/useWebsites'
import { WebsiteCard } from '@/components/websites/WebsiteCard'
import { websitesMatchingName } from '@/utils/websites'

export const WebsitesContent = () => {
  const [query, setQuery] = useState('')
  const websites = useWebsites()
  const matches = websites.data ? websitesMatchingName(websites.data, query) : []

  return (
    <div className="flex-col-4">
      <h1 className="typography-title-lg">Websites</h1>
      <SearchBar
        value={query}
        onValueChange={setQuery}
        onSearch={setQuery}
        placeholder="Search by name"
        aria-label="Search websites by name"
        containerProps={{ className: 'max-w-md' }}
      />
      <LoadingAndErrorComponent
        isLoading={websites.isPending}
        hasError={websites.isError}
        loadingComponent={<p className="typography-body text-description">Loading websites</p>}
        errorComponent={<p className="typography-body text-description">Websites are unavailable.</p>}
      >
        {matches.length === 0 && (
          <p className="typography-body text-description">
            {query.trim() ? 'No websites match that name.' : 'You do not own any websites.'}
          </p>
        )}
        {matches.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {matches.map((website) => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
        )}
      </LoadingAndErrorComponent>
    </div>
  )
}
