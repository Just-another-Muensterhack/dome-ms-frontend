type WebsiteUrlLinkProps = {
  url: string,
}

export const WebsiteUrlLink = ({
  url,
}: WebsiteUrlLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="typography-body text-primary block truncate hover:underline"
    >
      {url}
    </a>
  )
}
