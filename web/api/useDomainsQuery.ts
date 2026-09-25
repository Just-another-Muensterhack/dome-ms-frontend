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
    {
      id: 'lumen-domain',
      url: 'https://lumen.example.com',
      verified: true,
      deployedWebsite: { id: 'lumen', name: 'Lumen' },
    },
    {
      id: 'lumen-preview-domain',
      url: 'https://preview.lumen.example.com',
      verified: true,
      deployedWebsite: { id: 'lumen', name: 'Lumen' },
    },
    {
      id: 'lumen-eu-domain',
      url: 'https://eu.lumen.example.com',
      verified: true,
      deployedWebsite: { id: 'lumen', name: 'Lumen' },
    },
    {
      id: 'lumen-us-domain',
      url: 'https://us.lumen.example.com',
      verified: false,
      deployedWebsite: { id: 'lumen', name: 'Lumen' },
    },
    {
      id: 'lumen-apac-domain',
      url: 'https://apac.lumen.example.com',
      verified: true,
      deployedWebsite: { id: 'lumen', name: 'Lumen' },
    },
    {
      id: 'lumen-docs-domain',
      url: 'https://docs.lumen.example.com',
      verified: true,
      deployedWebsite: { id: 'lumen', name: 'Lumen' },
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
