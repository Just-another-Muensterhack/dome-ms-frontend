import Head from 'next/head'
import type { AppProps } from 'next/app'
import { HightideProvider } from '@helpwave/hightide'
import titleWrapper from '@/utils/titleWrapper'
import '../globals.css'

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <HightideProvider
      locale={{
        timeZone: 'Europe/Berlin',
        is24HourFormat: true,
      }}
    >
      <Head>
        <title>{titleWrapper()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </HightideProvider>
  )
}

export default MyApp
