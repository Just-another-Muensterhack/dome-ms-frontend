import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { WebsiteAnalytics } from '@/components/analytics/WebsiteAnalytics'
import { Page } from '@/components/layout/Page'
import { useDomeTranslation } from '@/i18n/useDomeTranslation'

const WebsiteAnalyticsPage: NextPage = () => {
  const router = useRouter()
  const translation = useDomeTranslation()
  const websiteId = typeof router.query['id'] === 'string' ? router.query['id'] : ''

  return (
    <Page pageTitle={translation('analytics')}>
      {websiteId && (
        <WebsiteAnalytics websiteId={websiteId} />
      )}
    </Page>
  )
}

export default WebsiteAnalyticsPage
