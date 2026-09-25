import { useState } from 'react'
import { LoadingAndErrorComponent, SearchBar } from '@helpwave/hightide'
import { useWebsites } from '@/api/useWebsites'
import { WebsiteCard } from '@/components/websites/WebsiteCard'
import { useDomeTranslation } from '@/i18n/useDomeTranslation'
import { websitesMatchingName } from '@/utils/websites'

export const WebsitesContent = () => {
  const translation = useDomeTranslation()
  const [query, setQuery] = useState('')
  const websites = useWebsites()
  const matches = websites.data ? websitesMatchingName(websites.data, query) : []

  return (
    <div className="flex-col-4">
      <h1 className="typography-title-lg">{translation('navWebsites')}</h1>
      <SearchBar
        value={query}
        onValueChange={setQuery}
        onSearch={setQuery}
        placeholder={translation('searchByName')}
        aria-label={translation('searchWebsitesByName')}
        containerProps={{ className: 'max-w-md' }}
      />
      <LoadingAndErrorComponent
        isLoading={websites.isPending}
        hasError={websites.isError}
        loadingComponent={<p className="typography-body text-description">{translation('loadingWebsites')}</p>}
        errorComponent={<p className="typography-body text-description">{translation('websitesUnavailable')}</p>}
      >
        {matches.length === 0 && (
          <p className="typography-body text-description">
            {query.trim() ? translation('noWebsitesMatchName') : translation('noWebsitesOwned')}
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
