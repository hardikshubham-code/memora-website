// "Coming soon" until the Play listing is live; then render an <a> to the listing (see README.md).
export default function PlayButton() {
  return (
    <span className="btn btn-primary is-soon" aria-disabled="true">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Zm11.6 11.6 2.4 2.4-11.3 6.4 8.9-8.8Zm3.9-3.5 2.6 1.5c.8.5.8 1.6 0 2.1l-2.6 1.5-2.7-2.7 2.7-2.4ZM6.3 1.8l11.3 6.4-2.4 2.4-8.9-8.8Z" />
      </svg>
      Coming soon to Google Play
    </span>
  )
}
