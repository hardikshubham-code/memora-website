import Layout from '../components/Layout.jsx'
import PlayButton from '../components/PlayButton.jsx'
import {
  AccountsScreen,
  BackupScreen,
  Device,
  GalleryScreen,
  StorageFullScreen,
  UploadScreen,
  scene,
} from '../components/AppScreens.jsx'

// `tone` picks the icon colour class: '' (plum), 't' (tomato), 's' (sky), 'b' (butter).
const features = [
  {
    tone: '',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    title: 'One gallery, many accounts',
    text: 'Connect several Google accounts and see everything Memora has backed up in one timeline, with a colour for each account.',
  },
  {
    tone: 't',
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </>
    ),
    title: 'Automatic daily or weekly backup',
    text: 'Pick a day and time. Memora backs up new and edited media in the background, on Wi-Fi only or while charging if you prefer.',
  },
  {
    tone: 's',
    icon: <path d="M7 7h10l-3-3M17 17H7l3 3" />,
    title: 'Switches accounts when one is full',
    text: 'When an account runs out of space, Memora moves on to the next connected account with room. The rest of the backup keeps going.',
  },
  {
    tone: 'b',
    icon: (
      <>
        <path d="M12 3v12M7 10l5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    title: 'Large videos upload reliably',
    text: 'Big files go up in chunks and resume where they stopped after a lost connection or a restart, so nothing is uploaded twice.',
  },
  {
    tone: '',
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
    title: 'Keeps your photos intact',
    text: "Memora uploads original files, including the location your phone saved in each photo, so your backups match what's on the phone.",
  },
  {
    tone: 't',
    icon: <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" />,
    title: 'Trash and restore',
    text: 'Move photos to Trash one at a time or in bulk, then restore them. Google Drive permanently removes trashed items after 30 days.',
  },
]

// Screens from the app wireframes, shown in "Inside the app".
const tour = [
  {
    Screen: AccountsScreen,
    title: 'All your free space, added up',
    text: 'See the total free storage across every connected account, how much goes to photos and videos, and how full each account is.',
  },
  {
    Screen: BackupScreen,
    title: 'Back up on your schedule',
    text: 'Daily or weekly, at the time you pick. Limit it to Wi-Fi or charging, or tap Back up now whenever you like.',
  },
  {
    Screen: UploadScreen,
    title: 'Progress you can follow',
    text: 'Watch each file go up. Big videos upload in pieces and carry on after a dropped connection instead of starting over.',
  },
  {
    Screen: StorageFullScreen,
    dark: true,
    title: 'Full account? It moves on',
    text: 'When one account fills up, Memora switches to the next one with room, so the backup finishes.',
  },
]

const steps = [
  {
    title: 'Connect a Google account',
    text: 'Sign in with Google. Memora asks only for access to the files it creates in your Drive, never your other files.',
  },
  {
    title: 'Choose what to back up',
    text: 'Back up from the in-app picker, share photos to Memora from any app, or turn on automatic daily or weekly backup.',
  },
  {
    title: 'Browse everything together',
    text: (
      <>
        Your backups land in a <em>Memora Backup</em> folder in each account. View photos and play videos from one gallery.
      </>
    ),
  },
]

const privacyPoints = [
  'No Memora account, no Memora server, no copies of your photos with us.',
  'Limited Drive access: Memora can only see files it uploaded itself.',
  "Sign-in tokens are kept in Android's encrypted Keystore and never leave your phone.",
  'No ads and no third-party analytics or tracking.',
]

const faqs = [
  {
    q: 'Does Memora cost anything?',
    a: "Memora is free. Your backups use the storage in your own Google accounts, so Google's normal storage limits and any Google One plan you have apply.",
  },
  {
    q: 'Can Memora see the rest of my Google Drive?',
    a: (
      <>
        No. Memora uses Google's <code>drive.file</code> permission, which only gives it access to files it created. Your documents, other photos and other apps' files stay out of reach.
      </>
    ),
  },
  {
    q: 'What happens if I uninstall the app or get a new phone?',
    a: "Your backups stay in your Google Drive. Reinstall Memora, reconnect the same accounts and it rebuilds its list of what's already backed up, so it doesn't upload everything again.",
  },
  {
    q: 'What happens when an account runs out of space?',
    a: 'Memora tries your other connected accounts. If none has room, the affected files wait until you free up space or add an account, and everything else carries on.',
  },
  {
    q: 'If I delete a photo in Memora, is it removed from my phone?',
    a: "No. Moving a photo to Trash in Memora only affects the copy in Google Drive. Memora won't upload that photo again unless you restore it.",
  },
  {
    q: 'Which phones are supported?',
    a: 'Android phones running Android 8.0 or later. There is no iPhone, web or desktop version yet.',
  },
]

export default function Home() {
  return (
    <Layout current="index.html">
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div>
              <span className="eyebrow">Photo &amp; video backup for Android</span>
              <h1 id="hero-title">memora</h1>
              <p className="tagline">All your memories in one place.</p>
              <p className="lede">Memora backs up the photos and videos on your phone to your own Google Drive, across as many Google accounts as you like, and shows everything in one gallery. There's nothing to sign up for and no Memora server between you and your files.</p>
              <div className="cta">
                <PlayButton />
                <a className="btn btn-ghost" href="#how">How it works</a>
              </div>
              <p className="note">Free · Android 8.0 and later · Works with personal and Workspace Google accounts</p>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="polaroid p1"><i style={{ backgroundImage: 'url(assets/welcome_photo_1.jpg)' }} /></div>
              <div className="polaroid p2"><i style={{ background: scene(1) }} /></div>
              <Device className="hero-device">
                <GalleryScreen />
              </Device>
            </div>
          </div>
        </section>

        <section id="features" aria-labelledby="features-title">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">What it does</span>
              <h2 id="features-title">Backup that keeps up with your storage</h2>
              <p>Free Google storage tends to end up split across several accounts. Memora treats them as one place for your photos.</p>
            </div>
            <div className="features">
              {features.map(({ tone, icon, title, text }) => (
                <article className="card" key={title}>
                  <div className={tone ? `icon ${tone}` : 'icon'}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {icon}
                    </svg>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="inside" className="inside" aria-labelledby="inside-title">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">Inside the app</span>
              <h2 id="inside-title">Built around your storage</h2>
              <p>A closer look at the screens you'll use most.</p>
            </div>
            <div className="tour">
              {tour.map(({ Screen, dark, title, text }) => (
                <figure key={title}>
                  <Device dark={dark}>
                    <Screen />
                  </Device>
                  <figcaption>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="alt" aria-labelledby="how-title">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">How it works</span>
              <h2 id="how-title">Set up in a minute</h2>
            </div>
            <ol className="steps">
              {steps.map(({ title, text }) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="privacy-title">
          <div className="wrap privacy-band">
            <div className="photo-stack" aria-hidden="true">
              <img src="assets/welcome_photo_1.jpg" alt="" loading="lazy" />
              <img src="assets/welcome_photo_2.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <span className="kicker">Private by design</span>
              <h2 id="privacy-title" className="h2">Your photos go to your Drive and nowhere else</h2>
              <p className="sub">Memora runs entirely on your phone and talks directly to Google. We don't operate a server that could see, store or sell your media.</p>
              <ul className="checks">
                {privacyPoints.map((point) => (
                  <li key={point}><span>{point}</span></li>
                ))}
              </ul>
              <p className="more"><a href="privacy.html">Read the privacy policy →</a></p>
            </div>
          </div>
        </section>

        <section id="faq" className="alt" aria-labelledby="faq-title">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">FAQ</span>
              <h2 id="faq-title">Questions, answered</h2>
            </div>
            <div className="faq">
              {faqs.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="download" aria-labelledby="download-title">
          <div className="wrap">
            <div className="cta-band">
              <div>
                <h2 id="download-title">Coming soon to Android</h2>
                <p>Free on Google Play. Your photos, your Drive.</p>
              </div>
              <PlayButton />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
