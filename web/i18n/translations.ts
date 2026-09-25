// AUTO-GENERATED. DO NOT EDIT.
/* eslint-disable @stylistic/quote-props */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Translation } from '@helpwave/internationalization'
import { TranslationGen } from '@helpwave/internationalization'

export const domeTranslationLocales = ['de-DE', 'en-US'] as const

export type DomeTranslationLocales = typeof domeTranslationLocales[number]

export type DomeTranslationEntries = {
  'analytics': string,
  'analyticsFor': (values: { name: string }) => string,
  'analyticsUnavailable': string,
  'appName': string,
  'blockedRequestsDuringLastDay': string,
  'blockedRequestsLastDay': string,
  'custom': string,
  'deploymentUrlsFor': (values: { name: string }) => string,
  'domainsFor': (values: { name: string }) => string,
  'domainsUnavailable': string,
  'language': string,
  'loadingAnalytics': string,
  'loadingDomains': string,
  'loadingWebsites': string,
  'moreCount': (values: { count: string }) => string,
  'navDashboard': string,
  'navDomains': string,
  'navWebsites': string,
  'noDeployments': string,
  'noDomains': string,
  'noDomainsMatchSearch': string,
  'noDomainsOwned': string,
  'noWebsitesMatchName': string,
  'noWebsitesOwned': string,
  'others': string,
  'searchByName': string,
  'searchDomains': string,
  'searchDomainsFor': (values: { name: string }) => string,
  'searchWebsitesByName': string,
  'settings': string,
  'theme': string,
  'unverified': string,
  'verified': string,
  'visitorsByCountry': string,
  'visitorsDuringLastDay': string,
  'visitorsLastDay': string,
  'websitesUnavailable': string,
}

export const domeTranslation: Translation<DomeTranslationLocales, Partial<DomeTranslationEntries>> = {
  'de-DE': {
    'analytics': `Analysen`,
    'analyticsFor': ({ name }): string => {
      return `Analysen für ${name}`
    },
    'analyticsUnavailable': `Analysen sind nicht verfügbar.`,
    'appName': `dome`,
    'blockedRequestsDuringLastDay': `Blockierte Anfragen während der letzten 24 Stunden`,
    'blockedRequestsLastDay': `Blockierte Anfragen in den letzten 24 Stunden`,
    'custom': `Benutzerdefiniert`,
    'deploymentUrlsFor': ({ name }): string => {
      return `Deployment-URLs für ${name}`
    },
    'domainsFor': ({ name }): string => {
      return `Domains für ${name}`
    },
    'domainsUnavailable': `Domains sind nicht verfügbar.`,
    'language': `Sprache`,
    'loadingAnalytics': `Analysen werden geladen`,
    'loadingDomains': `Domains werden geladen`,
    'loadingWebsites': `Websites werden geladen`,
    'moreCount': ({ count }): string => {
      return `+${count} weitere`
    },
    'navDashboard': `Dashboard`,
    'navDomains': `Domains`,
    'navWebsites': `Websites`,
    'noDeployments': `Keine Deployments`,
    'noDomains': `Keine Domains`,
    'noDomainsMatchSearch': `Keine Domains passen zu dieser Suche.`,
    'noDomainsOwned': `Sie besitzen keine Domains.`,
    'noWebsitesMatchName': `Keine Websites passen zu diesem Namen.`,
    'noWebsitesOwned': `Sie besitzen keine Websites.`,
    'others': `Weitere`,
    'searchByName': `Nach Namen suchen`,
    'searchDomains': `Domains suchen`,
    'searchDomainsFor': ({ name }): string => {
      return `Domains für ${name} suchen`
    },
    'searchWebsitesByName': `Websites nach Namen suchen`,
    'settings': `Einstellungen`,
    'theme': `Darstellung`,
    'unverified': `Nicht verifiziert`,
    'verified': `Verifiziert`,
    'visitorsByCountry': `Besucher nach Land`,
    'visitorsDuringLastDay': `Besucher während der letzten 24 Stunden`,
    'visitorsLastDay': `Besucher in den letzten 24 Stunden`,
    'websitesUnavailable': `Websites sind nicht verfügbar.`
  },
  'en-US': {
    'analytics': `Analytics`,
    'analyticsFor': ({ name }): string => {
      return `Analytics for ${name}`
    },
    'analyticsUnavailable': `Analytics are unavailable.`,
    'appName': `dome`,
    'blockedRequestsDuringLastDay': `Blocked requests during the last 24 hours`,
    'blockedRequestsLastDay': `Blocked requests in the last 24 hours`,
    'custom': `Custom`,
    'deploymentUrlsFor': ({ name }): string => {
      return `Deployment URLs for ${name}`
    },
    'domainsFor': ({ name }): string => {
      return `Domains for ${name}`
    },
    'domainsUnavailable': `Domains are unavailable.`,
    'language': `Language`,
    'loadingAnalytics': `Loading analytics`,
    'loadingDomains': `Loading domains`,
    'loadingWebsites': `Loading websites`,
    'moreCount': ({ count }): string => {
      return `+${count} more`
    },
    'navDashboard': `Dashboard`,
    'navDomains': `Domains`,
    'navWebsites': `Websites`,
    'noDeployments': `No deployments`,
    'noDomains': `No domains`,
    'noDomainsMatchSearch': `No domains match that search.`,
    'noDomainsOwned': `You do not own any domains.`,
    'noWebsitesMatchName': `No websites match that name.`,
    'noWebsitesOwned': `You do not own any websites.`,
    'others': `Others`,
    'searchByName': `Search by name`,
    'searchDomains': `Search domains`,
    'searchDomainsFor': ({ name }): string => {
      return `Search domains for ${name}`
    },
    'searchWebsitesByName': `Search websites by name`,
    'settings': `Settings`,
    'theme': `Theme`,
    'unverified': `Unverified`,
    'verified': `Verified`,
    'visitorsByCountry': `Visitors by country`,
    'visitorsDuringLastDay': `Visitors during the last 24 hours`,
    'visitorsLastDay': `Visitors in the last 24 hours`,
    'websitesUnavailable': `Websites are unavailable.`
  }
}

