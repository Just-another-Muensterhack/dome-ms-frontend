import type { PropsWithChildren } from 'react'
import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppPage, IconButton, type AppPageNavigationItem } from '@helpwave/hightide'
import { GlobeIcon, Grid2X2PlusIcon, Link2Icon, SettingsIcon } from 'lucide-react'
import { useDomainsQuery } from '@/api/useDomainsQuery'
import { useWebsites } from '@/api/useWebsites'
import { useDomeTranslation } from '@/i18n/useDomeTranslation'
import titleWrapper from '@/utils/titleWrapper'

type PageProps = PropsWithChildren<{
  pageTitle?: string,
}>

export const Page = ({
  children,
  pageTitle,
}: PageProps) => {
  const router = useRouter()
  const translation = useDomeTranslation()
  const websites = useWebsites()
  const domains = useDomainsQuery()

  const sidebarItems = useMemo((): AppPageNavigationItem[] => [
    {
      id: 'dashboard',
      label: translation('navDashboard'),
      url: '/',
      icon: <Grid2X2PlusIcon className="-rotate-90 size-5" />,
    },
    {
      id: 'websites',
      label: translation('navWebsites'),
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
      label: translation('navDomains'),
      url: '/domains',
      icon: <Link2Icon className="size-5" />,
      items: (domains.data?.domains ?? []).map((domain) => ({
        id: `domain-${domain.id}`,
        label: domain.url,
        url: `/domains#${domain.id}`,
      })),
    },
  ], [websites.data, domains.data, translation])

  return (
    <AppPage
      sidebarProps={{
        header: (
          <Link href="/" className="flex-row-1 text-primary items-center rounded-lg p-2">
            <span className="typography-title-md whitespace-nowrap">{translation('appName')}</span>
          </Link>
        ),
        items: sidebarItems,
        activeUrl: router.asPath.split('?')[0],
        LinkComponent: Link,
      }}
      headerActions={[
        <IconButton
          key="settings"
          tooltip={translation('settings')}
          coloringStyle="text"
          className="ml-auto"
          onClick={() => {
            void router.push('/settings')
          }}
        >
          <SettingsIcon />
        </IconButton>,
      ]}
    >
      <Head>
        <title>{titleWrapper(pageTitle)}</title>
      </Head>
      {children}
    </AppPage>
  )
}
