import type { NextPage } from 'next'
import { LanguageSelect, ThemeSelect } from '@helpwave/hightide'
import { Page } from '@/components/layout/Page'
import { useDomeTranslation } from '@/i18n/useDomeTranslation'

const Settings: NextPage = () => {
  const translation = useDomeTranslation()

  return (
    <Page pageTitle={translation('settings')}>
      <div className="flex-col-6 max-w-md">
        <h1 className="typography-title-lg">{translation('settings')}</h1>
        <div className="flex-col-2">
          <h2 className="typography-title-sm">{translation('language')}</h2>
          <LanguageSelect />
        </div>
        <div className="flex-col-2">
          <h2 className="typography-title-sm">{translation('theme')}</h2>
          <ThemeSelect />
        </div>
      </div>
    </Page>
  )
}

export default Settings
