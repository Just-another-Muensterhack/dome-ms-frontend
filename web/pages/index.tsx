import type { NextPage } from 'next'
import { DashboardContent } from '@/components/dashboard/DashboardContent'
import { Page } from '@/components/layout/Page'

const Dashboard: NextPage = () => {
  return (
    <Page pageTitle="Dashboard">
      <DashboardContent />
    </Page>
  )
}

export default Dashboard
