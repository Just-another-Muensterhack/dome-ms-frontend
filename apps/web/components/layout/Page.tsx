import type { PropsWithChildren } from 'react'
import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppPage, type AppPageNavigationItem } from '@helpwave/hightide'
import { Grid2X2PlusIcon } from 'lucide-react'
import titleWrapper from '@/utils/titleWrapper'

type PageProps = PropsWithChildren<{
  pageTitle?: string,
}>

export const Page = ({
  children,
  pageTitle,
}: PageProps) => {
  const router = useRouter()

  const sidebarItems = useMemo((): AppPageNavigationItem[] => [
    {
      id: 'dashboard',
      label: 'Dashboard',
      url: '/',
      icon: <Grid2X2PlusIcon className="-rotate-90 size-5" />,
    },
  ], [])

  return (
    <AppPage
      sidebarProps={{
        header: (
          <Link href="/" className="flex-row-1 text-primary items-center rounded-lg p-2">
            <span className="typography-title-md whitespace-nowrap">dome</span>
          </Link>
        ),
        items: sidebarItems,
        activeUrl: router.pathname,
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
