import Layout from '../components/Layout.jsx'

export default function Privacy() {
  return (
    <Layout current="privacy.html">
      <main id="main" className="page">
        <div className="wrap">
          <span className="kicker">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="meta">Effective 26 October 2026 · Last updated 26 October 2026</p>

          <div className="summary-box">
            <h2>The short version</h2>
            <ul>
              <li>Memora runs on your phone and sends your photos and videos straight to <strong>your own</strong> Google Drive. We have no server and never receive your media.</li>
              <li>Memora can only access files in Google Drive that it uploaded itself.</li>
              <li>We don't sell, rent or share your data, show ads, or use third-party analytics.</li>
              <li>You can disconnect an account, delete your backups or uninstall the app at any time.</li>
            </ul>
          </div>

          <nav className="toc" aria-label="Contents">
            <strong>Contents</strong>
            <ol>
              <li><a href="#who">Who we are</a></li>
              <li><a href="#how">How Memora works</a></li>
              <li><a href="#collect">Information Memora handles</a></li>
              <li><a href="#google">Google user data</a></li>
              <li><a href="#permissions">Device permissions</a></li>
              <li><a href="#use">How information is used</a></li>
              <li><a href="#sharing">Sharing and disclosure</a></li>
              <li><a href="#storage">Storage and security</a></li>
              <li><a href="#retention">Retention and deletion</a></li>
              <li><a href="#rights">Your choices and rights</a></li>
              <li><a href="#children">Children</a></li>
              <li><a href="#changes">Changes to this policy</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ol>
          </nav>

          <article className="legal">
            <h2 id="who">1. Who we are</h2>
            <p>This Privacy Policy explains how the Memora Android app ("<strong>Memora</strong>", "the app", "we", "us") handles information when you use it. Memora is provided by 91social Software Pvt. Ltd. If you have questions, see <a href="mailto:support@memoramemora.com">Contact us</a>.</p>

            <h2 id="how">2. How Memora works</h2>
            <p>Memora is a client-only app. It runs entirely on your Android device and communicates directly with Google's services (Google Sign-In and the Google Drive API). <strong>There is no Memora server, no Memora account and no Memora database outside your phone.</strong> As a result, we (the developer) do not receive, see or store your photos, videos, Google account details or sign-in tokens.</p>
            <p>When you connect a Google account, Memora creates a folder named <em>Memora Backup</em> in that account's Google Drive and uploads the photos and videos you choose to back up into it.</p>

            <h2 id="collect">3. Information Memora handles</h2>
            <p>The table below lists the information the app handles, where it is kept and why. All of it stays on your device or in your own Google account.</p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Information</th><th>Where it is kept</th><th>Why</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google account basics: email address, Google account ID, and (if available) your name and profile photo</td>
                    <td>On your device, in the app's private database</td>
                    <td>To identify each connected account, show it in the account list and profile menu, and prevent the same account being added twice</td>
                  </tr>
                  <tr>
                    <td>Google sign-in tokens (access token and refresh token)</td>
                    <td>On your device only, encrypted with the Android Keystore</td>
                    <td>To call the Google Drive API on your behalf without asking you to sign in every time</td>
                  </tr>
                  <tr>
                    <td>Photos and videos you choose to back up, including their embedded metadata (such as date taken, camera details and photo location, if your camera recorded it)</td>
                    <td>Your own Google Drive, in the <em>Memora Backup</em> folder. A temporary copy may be held in the app's cache during upload and is deleted afterwards</td>
                    <td>To back them up. Memora uploads the original file so that your backup matches what's on your phone</td>
                  </tr>
                  <tr>
                    <td>File details: file name, type, size, last-modified time, a SHA-256 fingerprint of the file's content, and its Android media ID</td>
                    <td>On your device, and as private app properties attached to each file in your Google Drive</td>
                    <td>To know what has already been backed up, detect edited files, avoid duplicate uploads, and rebuild the backup list after a reinstall</td>
                  </tr>
                  <tr>
                    <td>Device identifier (Android's <code>ANDROID_ID</code>)</td>
                    <td>As a private app property on each file in your Google Drive</td>
                    <td>To recognise which of your backups came from this phone after you reinstall the app</td>
                  </tr>
                  <tr>
                    <td>Storage usage of each connected account (used and available space, as reported by Google)</td>
                    <td>On your device</td>
                    <td>To show storage per account and pick an account with enough space</td>
                  </tr>
                  <tr>
                    <td>Gallery listing and thumbnails of files Memora uploaded</td>
                    <td>Cached on your device</td>
                    <td>To show your gallery quickly, including when you're offline</td>
                  </tr>
                  <tr>
                    <td>Your settings (backup schedule, Wi-Fi only, charging only) and the upload queue</td>
                    <td>On your device</td>
                    <td>To run backups the way you've chosen and resume interrupted uploads</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Memora does <strong>not</strong> collect your Google password, contacts, messages, precise device location (other than what is already embedded in your photos), advertising ID, or usage analytics.</p>

            <h2 id="google">4. Google user data</h2>
            <p>Memora signs in with Google using OAuth 2.0 with PKCE and requests only these permissions (scopes):</p>
            <ul>
              <li><code>openid</code>, <code>email</code> and <code>profile</code>: to identify your account and show your email, name and profile photo inside the app.</li>
              <li><code>https://www.googleapis.com/auth/drive.file</code>: to create the <em>Memora Backup</em> folder, upload your photos and videos, list, view, trash, restore and permanently delete the files Memora uploaded, and read your Drive storage quota. This scope gives Memora access <strong>only to files the app created</strong>; it cannot see or change any other files in your Google Drive.</li>
            </ul>
            <p>Google user data is used only to provide Memora's backup and gallery features to you, inside the app on your device. It is not transferred to us or to anyone else, not used for advertising, not used to train artificial intelligence or machine learning models, and not read by humans.</p>
            <p>Memora's use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
            <p>You can remove Memora's access to your Google account at any time by disconnecting the account in the app, or from your <a href="https://myaccount.google.com/permissions" rel="noopener">Google Account permissions page</a>.</p>

            <h2 id="permissions">5. Device permissions</h2>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Permission</th><th>Why Memora asks for it</th></tr></thead>
                <tbody>
                  <tr><td>Photos and videos (<code>READ_MEDIA_IMAGES</code>, <code>READ_MEDIA_VIDEO</code>, or storage access on Android 12 and earlier)</td><td>To find the photos and videos on your phone so they can be backed up. On Android 14 and later you may grant access to selected photos only.</td></tr>
                  <tr><td>Media location (<code>ACCESS_MEDIA_LOCATION</code>)</td><td>So Android doesn't strip the location stored in your photos when Memora reads them. Without it, your backups would lose that information. Memora does not track your device's location.</td></tr>
                  <tr><td>Notifications (<code>POST_NOTIFICATIONS</code>)</td><td>To show backup progress, a summary when a backup finishes, and a prompt when an account needs to be reconnected.</td></tr>
                  <tr><td>Foreground service (<code>FOREGROUND_SERVICE</code>, <code>FOREGROUND_SERVICE_DATA_SYNC</code>)</td><td>To keep a backup running, with a visible notification, when you leave the app.</td></tr>
                  <tr><td>Internet (<code>INTERNET</code>)</td><td>To talk to Google Sign-In and Google Drive.</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="use">6. How information is used</h2>
            <p>Memora uses the information above only to:</p>
            <ul>
              <li>connect and reconnect your Google accounts;</li>
              <li>upload, update and resume backups of the media you choose, manually or on the schedule you set;</li>
              <li>choose an account with enough free storage;</li>
              <li>show your backed-up photos and videos in one gallery, and let you trash, restore or permanently delete them;</li>
              <li>avoid uploading the same file twice, including after a reinstall or on a new phone.</li>
            </ul>

            <h2 id="sharing">7. Sharing and disclosure</h2>
            <p>We do not sell, rent, trade or share your information. Because Memora has no server, we don't hold your information and so cannot disclose it.</p>
            <p>Your data is sent only to <strong>Google</strong>, the provider you chose for storage, so it can authenticate you and store your files in your Google Drive. Google's handling of that data is governed by the <a href="https://policies.google.com/privacy" rel="noopener">Google Privacy Policy</a> and your agreement with Google. Memora does not include advertising or analytics SDKs.</p>

            <h2 id="storage">8. Storage and security</h2>
            <ul>
              <li>All communication with Google uses HTTPS.</li>
              <li>Sign-in uses OAuth 2.0 with PKCE. Memora never sees or stores your Google password, and the app contains no client secret.</li>
              <li>Sign-in tokens are stored only in Android's encrypted secure storage (backed by the Android Keystore). They're never written to the app database, logs or crash reports.</li>
              <li>The app's database and secure storage are excluded from Android cloud backup and device-to-device transfer.</li>
              <li>Network logs in the app redact authorisation headers, tokens and upload session links.</li>
            </ul>
            <p>No method of storage or transmission is completely secure, but we design Memora to keep your data on your device and in your own Google account.</p>

            <h2 id="retention">9. Retention and deletion</h2>
            <ul>
              <li><strong>Backed-up media</strong> stays in your Google Drive until you delete it. Moving an item to Trash in Memora moves it to Google Drive's trash; Google permanently deletes trashed items after 30 days. "Delete forever" in Memora's Trash view deletes the item from Google Drive straight away.</li>
              <li><strong>Disconnecting an account</strong> revokes Memora's access at Google and deletes that account's tokens and local data from your phone. Files already in your Google Drive are not deleted.</li>
              <li><strong>Uninstalling Memora</strong> deletes all local data, including tokens, settings and cached thumbnails. Your backups remain in your Google Drive, where you can manage or delete them with Google Drive.</li>
              <li>Temporary copies made during upload are deleted once the upload completes.</li>
            </ul>

            <h2 id="rights">10. Your choices and rights</h2>
            <p>You are in control of your data:</p>
            <ul>
              <li>Turn automatic backup on or off, and choose Wi-Fi-only or charging-only backups, in Settings.</li>
              <li>Withdraw access to your photos, notifications or other permissions at any time in Android Settings.</li>
              <li>Disconnect any Google account in the app, or revoke access at <a href="https://myaccount.google.com/permissions" rel="noopener">myaccount.google.com/permissions</a>.</li>
              <li>View, download or delete your backups directly in Google Drive.</li>
            </ul>
            <p>Depending on where you live (for example under the GDPR, UK GDPR, India's Digital Personal Data Protection Act, or US state privacy laws), you may have rights to access, correct, delete or port your personal data, or to object to its processing. Since we don't hold your data, you can exercise most of these rights directly in the app, on your device and in your Google account. If you need help, <a href="#contact">contact us</a>.</p>

            <h2 id="children">11. Children</h2>
            <p>Memora is not directed at children under 13 (or the minimum age for a Google account where you live). We do not knowingly collect personal information from children.</p>

            <h2 id="changes">12. Changes to this policy</h2>
            <p>We may update this policy as Memora changes, for example if we add optional crash reporting. We'll update the "Last updated" date above, and for significant changes we'll tell you in the app or on this website before they take effect.</p>

            <h2 id="contact">13. Contact us</h2>
            <p>Questions or requests about this policy can be sent to:</p>
            <p><span className="fill">91social Software Private Limited</span><br />
              Email: <a href="mailto:support@memoramemora.com">support@memoramemora.com</a><br />
              #1470, 3rd Floor, 13th Cross, 19th Main Road,<br />
              Sector 1, HSR Layout, Bangalore - 560102.</p>
          </article>
        </div>
      </main>
    </Layout>
  )
}
