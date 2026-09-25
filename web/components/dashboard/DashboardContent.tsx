import { useMemo } from 'react'
import { useDashboardAnalytics } from '@/api/useDashboardAnalytics'
import { VisitorRing } from '@/components/dashboard/VisitorRing'
import { VisitorTimeline } from '@/components/dashboard/VisitorTimeline'
import { countryName } from '@/utils/countryName'
import {
  countInLastDay,
  requestsInLastDay,
  visitorCountrySegments
} from '@/utils/dashboardVisitors'

export const DashboardContent = () => {
  const analytics = useDashboardAnalytics()
  const now = useMemo(() => new Date(), [])
  const data = analytics.data
  const segments = data
    ? visitorCountrySegments(data.visitors).map((segment) => ({
      ...segment,
      label: segment.id === 'others' ? segment.label : countryName(segment.id),
    }))
    : []
  const recentRequests = data ? requestsInLastDay(data.requests, now) : []
  const visitorsLastDay = data ? countInLastDay(data.requests, now) : 0
  const recentBlockedRequests = data ? requestsInLastDay(data.blockedRequests, now) : []
  const blockedLastDay = data ? countInLastDay(data.blockedRequests, now) : 0

  return (
    <div className="flex-col-4">
      <h1 className="typography-title-lg">Dashboard</h1>
      {analytics.isPending && (
        <p className="typography-body text-description">Loading analytics</p>
      )}
      {analytics.isError && (
        <p className="typography-body text-description">Dashboard analytics are unavailable.</p>
      )}
      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <section className="rounded-lg bg-white p-4 flex-col-4">
            <h2 className="typography-title-md">Visitors by country</h2>
            <VisitorRing segments={segments} total={data.visitors.all} />
          </section>
          <section className="rounded-lg bg-white p-4 flex-col-4">
            <h2 className="typography-title-md">Visitors in the last 24 hours</h2>
            <p className="typography-title-lg">{visitorsLastDay}</p>
            <VisitorTimeline points={recentRequests} end={now} />
          </section>
          <section className="rounded-lg bg-white p-4 flex-col-4">
            <h2 className="typography-title-md">Blocked requests in the last 24 hours</h2>
            <p className="typography-title-lg">{blockedLastDay}</p>
            <VisitorTimeline
              points={recentBlockedRequests}
              end={now}
              color="#e5484d"
              label="Blocked requests during the last 24 hours"
            />
          </section>
        </div>
      )}
    </div>
  )
}
