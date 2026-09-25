import type { NextPage } from 'next'
import { DomainsContent } from '@/components/domains/DomainsContent'
import { Page } from '@/components/layout/Page'

const Domains: NextPage = () => {
  return (
    <Page pageTitle="Domains">
      <DomainsContent />
    </Page>
  )
}

export default Domains
