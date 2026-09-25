import {
  useQuery,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query'

export type DeployedWebsite = {
  id: string,
  name: string,
}

export type Domain = {
  id: string,
  url: string,
  verified: boolean,
  deployedWebsite?: DeployedWebsite,
}

export type DomainsQuery = {
  domains: Domain[],
}

const domainsSource = (): DomainsQuery => ({
  domains: [
    {
      id: 'harbor-domain',
      url: 'https://harbor.example.com',
      verified: true,
      deployedWebsite: { id: 'harbor', name: 'Harbor' },
    },
    {
      id: 'northwind-domain',
      url: 'https://northwind.example.com',
      verified: true,
      deployedWebsite: { id: 'northwind', name: 'Northwind' },
    },
    {
      id: 'staging-domain',
      url: 'https://staging.northwind.example.com',
      verified: false,
      deployedWebsite: { id: 'northwind', name: 'Northwind' },
    },
    {
      id: 'custom-domain',
      url: 'https://shop.example.org',
      verified: true,
    },
    {
      id: 'pending-domain',
      url: 'https://pending.example.org',
      verified: false,
    },
  ],
})

const queryDomains = () => Promise.resolve(domainsSource())

export type UseDomainsQueryOptions = Omit<
  UseQueryOptions<DomainsQuery, Error, DomainsQuery, QueryKey>,
  'queryFn' | 'queryKey'
> & {
  queryKey?: QueryKey,
}

export const useDomainsQuery = (
  options?: UseDomainsQueryOptions
): UseQueryResult<DomainsQuery, Error> => {
  const { queryKey, ...queryOptions } = options ?? {}

  return useQuery({
    queryKey: queryKey ?? ['domains'],
    ...queryOptions,
    queryFn: queryDomains,
  })
}
