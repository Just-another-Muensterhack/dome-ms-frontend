export const onboardingTimestampKey = 'onboarding-timestamp'

export const readOnboardingTimestamp = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }

  return localStorage.getItem(onboardingTimestampKey)
}

export const writeOnboardingTimestamp = (timestamp: string): void => {
  localStorage.setItem(onboardingTimestampKey, timestamp)
}
