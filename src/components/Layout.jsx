const mainLinks = [
  { href: 'index.html', label: 'Home' },
  { href: 'privacy.html', label: 'Privacy Policy' },
  { href: 'terms.html', label: 'Terms & Conditions' },
]

function Header({ current }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="index.html">
          <img src="assets/logo.svg" alt="Memora" width="156" height="44" />
        </a>
        <nav className="nav" aria-label="Main">
          {mainLinks.map(({ href, label }) => (
            <a key={href} href={href} aria-current={href === current ? 'page' : undefined}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer({ current }) {
  const isHome = current === 'index.html'
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <img className="logo" src="assets/logo.svg" alt="Memora" width="142" height="40" />
          <small>© 2026 Memora. Google Drive is a trademark of Google LLC. Memora is not affiliated with Google.</small>
        </div>
        <nav aria-label="Footer">
          {!isHome && <a href="index.html">Home</a>}
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms of Service</a>
          {isHome && <a href="mailto:support@example.com">Contact</a>}
        </nav>
      </div>
    </footer>
  )
}

// Shared page frame: skip link, header and footer. `current` is the page's file name.
export default function Layout({ current, children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header current={current} />
      {children}
      <Footer current={current} />
    </>
  )
}
