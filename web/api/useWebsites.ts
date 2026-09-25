import {
  useQuery,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query'

export type WebsiteDeployment = {
  id: string,
  url: string,
}

export type Website = {
  id: string,
  name: string,
  deployedTo: WebsiteDeployment[],
}

const websitesSource = (): Website[] => [
  {
    id: 'harbor',
    name: 'Harbor',
    deployedTo: [
      { id: 'harbor-prod', url: 'https://harbor.example.com' },
    ],
  },
  {
    id: 'northwind',
    name: 'Northwind',
    deployedTo: [
      { id: 'northwind-prod', url: 'https://northwind.example.com' },
      { id: 'northwind-staging', url: 'https://staging.northwind.example.com' },
    ],
  },
  {
    id: 'atlas',
    name: 'Atlas Docs',
    deployedTo: [
      { id: 'atlas-prod', url: 'https://docs.atlas.example.com' },
      { id: 'atlas-eu', url: 'https://eu.docs.atlas.example.com' },
      { id: 'atlas-us', url: 'https://us.docs.atlas.example.com' },
    ],
  },
  {
    id: 'lumen',
    name: 'Lumen',
    deployedTo: [
      { id: 'lumen-prod', url: 'https://lumen.example.com' },
      { id: 'lumen-preview', url: 'https://preview.lumen.example.com' },
      { id: 'lumen-eu', url: 'https://eu.lumen.example.com' },
      { id: 'lumen-us', url: 'https://us.lumen.example.com' },
      { id: 'lumen-apac', url: 'https://apac.lumen.example.com' },
    ],
  },
  {
    id: 'cobalt',
    name: 'Cobalt',
    deployedTo: [],
  },
]

const queryWebsites = () => Promise.resolve(websitesSource())

export type UseWebsitesOptions = Omit<
  UseQueryOptions<Website[], Error, Website[], QueryKey>,
  'queryFn' | 'queryKey'
> & {
  queryKey?: QueryKey,
}

export const useWebsites = (
  options?: UseWebsitesOptions
): UseQueryResult<Website[], Error> => {
  const { queryKey, ...queryOptions } = options ?? {}

  return useQuery({
    queryKey: queryKey ?? ['websites'],
    ...queryOptions,
    queryFn: queryWebsites,
  })
}
