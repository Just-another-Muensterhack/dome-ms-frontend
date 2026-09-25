const defaultTitle = 'dome'

const titleWrapper = (title?: string) => title ? `${title} | ${defaultTitle}` : defaultTitle

export default titleWrapper
