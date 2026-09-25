import type { NextPage } from 'next'
import { Page } from '@/components/layout/Page'
import { WebsitesContent } from '@/components/websites/WebsitesContent'

const Websites: NextPage = () => {
  return (
    <Page pageTitle="Websites">
      <WebsitesContent />
    </Page>
  )
}

export default Websites
