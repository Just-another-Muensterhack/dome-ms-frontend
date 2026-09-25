import type { NextPage } from 'next'
import { Page } from '@/components/layout/Page'

const Dashboard: NextPage = () => {
  return (
    <Page pageTitle="Dashboard">
      <div className="flex-col-4">
        <h1 className="typography-title-lg">Dashboard</h1>
      </div>
    </Page>
  )
}

export default Dashboard
