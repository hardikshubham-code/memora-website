import Layout from '../components/Layout.jsx'

export default function Terms() {
  return (
    <Layout current="terms.html">
      <main id="main" className="page">
        <div className="wrap">
          <span className="kicker">Legal</span>
          <h1>Terms of Service</h1>
          <p className="meta">Effective 26 October 2026 · Last updated 26 October 2026</p>

          <div className="summary-box">
            <h2>The short version</h2>
            <ul>
              <li>Memora is a free tool that backs up your media to your own Google Drive. Your files stay yours.</li>
              <li>Your use of Google Drive is also governed by Google's terms, and storage limits are set by Google.</li>
              <li>Keep your original photos until you've checked they're backed up. Memora is provided "as is".</li>
              <li>"Delete forever" can't be undone.</li>
            </ul>
          </div>

          <nav className="toc" aria-label="Contents">
            <strong>Contents</strong>
            <ol>
              <li><a href="#acceptance">Accepting these terms</a></li>
              <li><a href="#service">The service</a></li>
              <li><a href="#eligibility">Eligibility and accounts</a></li>
              <li><a href="#google">Google services</a></li>
              <li><a href="#content">Your content</a></li>
              <li><a href="#use">Acceptable use</a></li>
              <li><a href="#deletion">Trash and permanent deletion</a></li>
              <li><a href="#backup">Backups and availability</a></li>
              <li><a href="#licence">Licence and ownership</a></li>
              <li><a href="#fees">Fees</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#warranty">Disclaimer of warranties</a></li>
              <li><a href="#liability">Limitation of liability</a></li>
              <li><a href="#indemnity">Indemnity</a></li>
              <li><a href="#law">Governing law</a></li>
              <li><a href="#changes">Changes to these terms</a></li>
              <li><a href="#general">General</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ol>
          </nav>

          <article className="legal">
            <h2 id="acceptance">1. Accepting these terms</h2>
            <p>These Terms of Service ("<strong>Terms</strong>") are an agreement between you and <span className="fill">[Developer or company name]</span> ("<strong>we</strong>", "<strong>us</strong>") covering your use of the Memora Android app and this website (together, "<strong>Memora</strong>"). By installing or using Memora, you agree to these Terms and to our <a href="privacy.html">Privacy Policy</a>. If you don't agree, please don't use Memora.</p>

            <h2 id="service">2. The service</h2>
            <p>Memora is an app that backs up photos and videos from your Android device to one or more Google Drive accounts that you connect, and shows the media it has backed up in a single gallery. Features include manual backup, sharing to Memora from other apps, scheduled daily or weekly backup, switching to another connected account when one is full, and moving items to Trash, restoring them, or deleting them permanently.</p>
            <p>Memora runs on your device and connects directly to Google. We do not operate servers that store your files. We may add, change or remove features over time.</p>

            <h2 id="eligibility">3. Eligibility and accounts</h2>
            <ul>
              <li>You must be old enough to hold a Google account where you live, and able to agree to these Terms.</li>
              <li>You may only connect Google accounts that you own or are authorised to use. If you connect a work or school (Google Workspace) account, your organisation's rules also apply.</li>
              <li>You're responsible for keeping your device and Google accounts secure. Memora has no separate username or password; connecting a Google account signs you in.</li>
            </ul>

            <h2 id="google">4. Google services</h2>
            <p>Memora depends on Google Sign-In and the Google Drive API. Your use of Google Drive is governed by the <a href="https://policies.google.com/terms" rel="noopener">Google Terms of Service</a> and the <a href="https://policies.google.com/privacy" rel="noopener">Google Privacy Policy</a>. Storage limits, pricing for additional storage, and the availability of Google's services are set by Google, not by us.</p>
            <p>Memora is an independent app. It is not made, endorsed or sponsored by Google. Google Drive is a trademark of Google LLC.</p>

            <h2 id="content">5. Your content</h2>
            <p>You keep all rights to the photos, videos and other content you back up with Memora ("<strong>Your Content</strong>"). We do not claim ownership of Your Content and do not receive a copy of it. Memora only moves Your Content between your device and your Google Drive on your instructions.</p>
            <p>You are responsible for Your Content and for making sure you have the right to store it. Photos may contain metadata such as the location where they were taken; Memora preserves this metadata in your backups.</p>

            <h2 id="use">6. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>use Memora to store or distribute content that is illegal, infringes others' rights, or breaks Google's policies;</li>
              <li>connect Google accounts you aren't authorised to use;</li>
              <li>reverse engineer, decompile or modify the app, except where the law allows it;</li>
              <li>interfere with or overload Google's services through Memora, or bypass any usage limits;</li>
              <li>use Memora in a way that breaks any applicable law.</li>
            </ul>

            <h2 id="deletion">7. Trash and permanent deletion</h2>
            <ul>
              <li>Moving an item to Trash in Memora moves the backed-up copy to Google Drive's trash. It does not delete the original from your phone.</li>
              <li>Google Drive permanently deletes items 30 days after they are moved to trash.</li>
              <li>Using <strong>Delete forever</strong> in Memora's Trash view permanently deletes the item from Google Drive. <strong>This cannot be undone</strong> by us or, in most cases, by Google.</li>
              <li>Deleting a file from your phone does not delete its backup.</li>
            </ul>

            <h2 id="backup">8. Backups and availability</h2>
            <p>We work hard to make backups reliable, but we can't guarantee that every file will be backed up, or backed up at a particular time. Backups depend on things outside our control, including:</p>
            <ul>
              <li>your network connection, battery and device settings (such as battery optimisation and Android's background limits);</li>
              <li>the permissions you grant (for example, choosing "selected photos only" limits what Memora can back up);</li>
              <li>available storage in your Google accounts;</li>
              <li>the availability of Google's services and any changes Google makes to them;</li>
              <li>Google revoking or expiring Memora's access, in which case you'll need to reconnect the account.</li>
            </ul>
            <p>Before deleting originals from your phone, please check that they appear in your Memora gallery or in Google Drive.</p>

            <h2 id="licence">9. Licence and ownership</h2>
            <p>Subject to these Terms, we grant you a personal, non-exclusive, non-transferable, revocable licence to install and use Memora on Android devices you own or control, for your personal, non-commercial use. Memora, including its name, logo, design and software, belongs to us and our licensors, and these Terms don't give you any rights to it other than this licence. Open-source components in the app are licensed under their own terms.</p>

            <h2 id="fees">10. Fees</h2>
            <p>Memora is currently free to use. If we introduce paid features in the future, we'll tell you the price and terms before you're charged. Any extra Google storage you buy is a separate arrangement between you and Google.</p>

            <h2 id="privacy">11. Privacy</h2>
            <p>Our <a href="privacy.html">Privacy Policy</a> explains how Memora handles information, including Google user data. In short, your media goes directly from your device to your own Google Drive and is never sent to us.</p>

            <h2 id="termination">12. Termination</h2>
            <p>You can stop using Memora at any time by disconnecting your accounts and uninstalling the app. Your backups remain in your Google Drive.</p>
            <p>We may suspend or end your licence to use Memora if you seriously or repeatedly breach these Terms, or if we stop offering the app. Sections 5, 7, 9 and 13 to 18 continue to apply after termination.</p>

            <h2 id="warranty">13. Disclaimer of warranties</h2>
            <p className="caps">To the fullest extent permitted by law, Memora is provided "as is" and "as available", without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that Memora will be uninterrupted, error-free or secure, or that any file will be backed up or kept.</p>
            <p>Some jurisdictions don't allow certain warranties to be excluded, so some of the above may not apply to you. Nothing in these Terms affects rights you have as a consumer that can't be waived by contract.</p>

            <h2 id="liability">14. Limitation of liability</h2>
            <p className="caps">To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of data, photos, videos, profits or goodwill, arising from or relating to your use of, or inability to use, Memora. Our total liability for any claim relating to Memora is limited to the greater of the amount you paid us for Memora in the 12 months before the claim, or USD 50.</p>
            <p>These limits don't apply to liability that can't be limited by law, such as liability for death or personal injury caused by negligence, or for fraud.</p>

            <h2 id="indemnity">15. Indemnity</h2>
            <p>To the extent permitted by law, you agree to indemnify us against claims, losses and costs (including reasonable legal fees) arising from Your Content or your breach of these Terms.</p>

            <h2 id="law">16. Governing law</h2>
            <p>These Terms are governed by the laws of <span className="fill">[country / state]</span>, without regard to its conflict-of-laws rules. Disputes will be handled by the courts of <span className="fill">[city, country]</span>, unless the law where you live gives you the right to bring a claim in your local courts.</p>

            <h2 id="changes">17. Changes to these terms</h2>
            <p>We may update these Terms from time to time. We'll change the "Last updated" date above and, for material changes, give you notice in the app or on this website before they take effect. If you keep using Memora after the changes take effect, you accept the updated Terms.</p>

            <h2 id="general">18. General</h2>
            <ul>
              <li>These Terms and the Privacy Policy are the whole agreement between you and us about Memora.</li>
              <li>If any part of these Terms is found to be unenforceable, the rest stays in effect.</li>
              <li>If we don't enforce a right straight away, we haven't waived it.</li>
              <li>You may not transfer your rights under these Terms. We may transfer ours to a successor that continues to provide Memora.</li>
            </ul>

            <h2 id="contact">19. Contact us</h2>
            <p>Questions about these Terms can be sent to:</p>
            <p>91social Software Pvt. Ltd.<br />
              Email: <a href="mailto:support@memoramemora.com">support@memoramemora.com</a><br />
              #1470, 3rd Floor, 13th Cross, 19th Main Road,<br />
              Sector 1, HSR Layout, Bangalore - 560102.</p>
          </article>
        </div>
      </main>
    </Layout>
  )
}
