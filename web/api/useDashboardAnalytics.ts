import {
  useQuery,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query'

export type DashboardAnalyticsCount = {
  count: number,
  date: Date,
}

export type DashboardAnalytics = {
  visitors: {
    all: number,
  } & Record<string, number>,
  requests: DashboardAnalyticsCount[],
  blockedRequests: DashboardAnalyticsCount[],
}

type DashboardAnalyticsCountSource = {
  count: number,
  date: string,
}

type DashboardAnalyticsSource = {
  visitors: DashboardAnalytics['visitors'],
  requests: DashboardAnalyticsCountSource[],
  blockedRequests: DashboardAnalyticsCountSource[],
}

const hourMs = 60 * 60 * 1000

const dashboardAnalyticsSource = (): DashboardAnalyticsSource => {
  const now = Date.now()
  return {
    visitors: {
      all: 1265,
      DEU: 420,
      USA: 310,
      FRA: 180,
      GBR: 140,
      JPN: 90,
      BRA: 70,
      IND: 55,
    },
    requests: [
      { count: 8, date: new Date(now - 26 * hourMs).toISOString() },
      { count: 14, date: new Date(now - 22 * hourMs).toISOString() },
      { count: 21, date: new Date(now - 18 * hourMs).toISOString() },
      { count: 17, date: new Date(now - 14 * hourMs).toISOString() },
      { count: 28, date: new Date(now - 10 * hourMs).toISOString() },
      { count: 19, date: new Date(now - 6 * hourMs).toISOString() },
      { count: 24, date: new Date(now - 2 * hourMs).toISOString() },
    ],
    blockedRequests: [
      { count: 2, date: new Date(now - 26 * hourMs).toISOString() },
      { count: 3, date: new Date(now - 22 * hourMs).toISOString() },
      { count: 5, date: new Date(now - 18 * hourMs).toISOString() },
      { count: 4, date: new Date(now - 14 * hourMs).toISOString() },
      { count: 9, date: new Date(now - 10 * hourMs).toISOString() },
      { count: 6, date: new Date(now - 6 * hourMs).toISOString() },
      { count: 7, date: new Date(now - 2 * hourMs).toISOString() },
    ],
  }
}

const parseCounts = (counts: DashboardAnalyticsCountSource[]): DashboardAnalyticsCount[] => (
  counts.map((count) => ({
    count: count.count,
    date: new Date(count.date),
  }))
)

const parseDashboardAnalytics = (source: DashboardAnalyticsSource): DashboardAnalytics => ({
  visitors: source.visitors,
  requests: parseCounts(source.requests),
  blockedRequests: parseCounts(source.blockedRequests),
})

const queryDashboardAnalytics = () => Promise.resolve(
  parseDashboardAnalytics(dashboardAnalyticsSource())
)

export type UseDashboardAnalyticsOptions = Omit<
  UseQueryOptions<DashboardAnalytics, Error, DashboardAnalytics, QueryKey>,
  'queryFn' | 'queryKey'
> & {
  queryKey?: QueryKey,
}

export const useDashboardAnalytics = (
  options?: UseDashboardAnalyticsOptions
): UseQueryResult<DashboardAnalytics, Error> => {
  const { queryKey, ...queryOptions } = options ?? {}

  return useQuery({
    queryKey: queryKey ?? ['dashboard-analytics'],
    ...queryOptions,
    queryFn: queryDashboardAnalytics,
  })
}
