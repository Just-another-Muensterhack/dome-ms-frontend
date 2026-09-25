import type { PropsWithChildren } from 'react'
import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppPage, type AppPageNavigationItem } from '@helpwave/hightide'
import { GlobeIcon, Grid2X2PlusIcon, Link2Icon } from 'lucide-react'
import { useDomainsQuery } from '@/api/useDomainsQuery'
import { useWebsites } from '@/api/useWebsites'
import titleWrapper from '@/utils/titleWrapper'

type PageProps = PropsWithChildren<{
  pageTitle?: string,
}>

export const Page = ({
  children,
  pageTitle,
}: PageProps) => {
  const router = useRouter()
  const websites = useWebsites()
  const domains = useDomainsQuery()

  const sidebarItems = useMemo((): AppPageNavigationItem[] => [
    {
      id: 'dashboard',
      label: 'Dashboard',
      url: '/',
      icon: <Grid2X2PlusIcon className="-rotate-90 size-5" />,
    },
    {
      id: 'websites',
      label: 'Websites',
      url: '/websites',
      icon: <GlobeIcon className="size-5" />,
      items: (websites.data ?? []).map((website) => ({
        id: `website-${website.id}`,
        label: website.name,
        url: `/websites#${website.id}`,
      })),
    },
    {
      id: 'domains',
      label: 'Domains',
      url: '/domains',
      icon: <Link2Icon className="size-5" />,
      items: (domains.data?.domains ?? []).map((domain) => ({
        id: `domain-${domain.id}`,
        label: domain.url,
        url: `/domains#${domain.id}`,
      })),
    },
  ], [websites.data, domains.data])

  return (
    <AppPage
      sidebarProps={{
        header: (
          <Link href="/" className="flex-row-1 text-primary items-center rounded-lg p-2">
            <span className="typography-title-md whitespace-nowrap">dome</span>
          </Link>
        ),
        items: sidebarItems,
        activeUrl: router.asPath.split('?')[0],
        LinkComponent: Link,
      }}
    >
      <Head>
        <title>{titleWrapper(pageTitle)}</title>
      </Head>
      {children}
    </AppPage>
  )
}
