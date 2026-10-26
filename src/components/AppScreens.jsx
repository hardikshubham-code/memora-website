// Phone screens drawn in HTML/CSS after the app wireframes (wireframe.html).
// They are decorative: every device is aria-hidden and the text around it says the same thing.

// Account colours used throughout the app: A tomato, B sky, C butter.
export const accountColors = ['#E0673A', '#5B8FB9', '#E9B93A']

// Illustrated "photo" for a tile: a sky gradient, a sun and two hills (ported from the wireframe).
const palettes = [
  [28, 60, 80, 40, 70], [200, 45, 78, 215, 55], [145, 32, 72, 160, 45], [340, 50, 82, 12, 60],
  [45, 70, 80, 28, 62], [255, 35, 78, 270, 52], [95, 30, 74, 110, 46], [12, 55, 80, 350, 60],
]
export function scene(i) {
  const [h, s, l, h2, l2] = palettes[i % palettes.length]
  return [
    `radial-gradient(circle at ${60 + (i % 3) * 10}% ${24 + (i % 4) * 4}%, rgba(255,255,255,.8) 0 8%, transparent 9%)`,
    `radial-gradient(ellipse 95% 38% at 15% 108%, hsl(${h2} ${s}% ${l2}%) 0 62%, transparent 63%)`,
    `radial-gradient(ellipse 80% 30% at 92% 112%, hsl(${h2} ${s - 10}% ${l2 - 14}%) 0 62%, transparent 63%)`,
    `linear-gradient(170deg, hsl(${h} ${s + 10}% ${l + 6}%), hsl(${h2} ${s}% ${l - 6}%))`,
  ].join(',')
}

function StatusBar({ light }) {
  return (
    <div className={light ? 's-status is-light' : 's-status'}>
      <span>9:41</span>
      <span>●●● ▮</span>
    </div>
  )
}

export function Device({ className = '', children, dark }) {
  return (
    <div className={`device ${className}`} aria-hidden="true">
      <div className={dark ? 's-screen is-dark' : 's-screen'}>{children}</div>
    </div>
  )
}

// ---------- Unified gallery (hero) ----------

const masonry = [
  [{ i: 0, h: 96, a: 0 }, { i: 5, h: 128, a: 1, video: true }, { i: 2, h: 84, a: 0 }, { i: 7, h: 110, a: 2 }],
  [{ i: 3, h: 126, a: 1 }, { i: 4, h: 90, a: 0 }, { i: 1, h: 116, a: 2 }, { i: 6, h: 96, a: 1 }],
]

export function GalleryScreen() {
  return (
    <>
      <StatusBar />
      <div className="s-head">
        <b className="s-wordmark">memora</b>
        <span className="s-avatars">
          {accountColors.map((c, i) => <i key={c} style={{ background: c }}>{'ABC'[i]}</i>)}
        </span>
      </div>
      <div className="s-memory" style={{ background: scene(3) }}>
        <span className="s-pill">✦ On this day · 2024</span>
        <div>
          <b>Sunset, last October</b>
          <small>14 photos · Account A</small>
        </div>
      </div>
      <div className="s-filter">
        <span className="s-chip is-on">All accounts ▾</span>
        <span className="s-chip">Photos</span>
        <span className="s-chip">Videos</span>
      </div>
      <div className="s-label">This week</div>
      <div className="s-masonry">
        {masonry.map((col, c) => (
          <div key={c}>
            {col.map(({ i, h, a, video }) => (
              <div key={i} className={video ? 's-tile is-video' : 's-tile'} style={{ height: h, background: scene(i), '--dot': accountColors[a] }} />
            ))}
          </div>
        ))}
      </div>
      <div className="s-capsule">
        <div>
          <b>Backing up… 34 of 50</b>
          <small>Tonight's automatic backup</small>
        </div>
        <div className="s-ring is-small" style={{ '--p': 68 }}><b>68%</b></div>
      </div>
    </>
  )
}

// ---------- Accounts & storage ----------

const accounts = [
  { name: 'Account A', mail: 'alex@example.com', used: 11.2, photos: '1,284 photos · 62 videos' },
  { name: 'Account B', mail: 'alex.work@example.com', used: 4.1, photos: '416 photos · 18 videos' },
]

export function AccountsScreen() {
  return (
    <>
      <StatusBar />
      <div className="s-body">
        <div className="s-title">Accounts</div>
        <div className="s-total">
          <small className="s-caps">Total free</small>
          <div className="s-big">14.7<span> GB</span></div>
          <small>15.3 of 30 GB used · 2 accounts</small>
          <div className="s-stack">
            <i style={{ flex: 11.2, background: accountColors[0] }} />
            <i style={{ flex: 4.1, background: accountColors[1] }} />
            <i style={{ flex: 14.7 }} />
          </div>
        </div>
        <div className="s-pair">
          <div className="s-card"><small>Photos</small><b>9.6 <span>GB</span></b></div>
          <div className="s-card"><small>Videos</small><b>4.9 <span>GB</span></b></div>
        </div>
        <small className="s-caps">By account</small>
        {accounts.map(({ name, mail, used, photos }, i) => (
          <div className="s-card s-account" key={name}>
            <div className="s-row">
              <i className="s-av" style={{ background: accountColors[i] }}>{name.slice(-1)}</i>
              <div className="s-grow"><b>{name}</b><small>{mail}</small></div>
              <div className="s-free"><b>{(15 - used).toFixed(1)}</b><small>GB free</small></div>
            </div>
            <div className="s-meter"><i style={{ width: `${(used / 15) * 100}%`, background: accountColors[i] }} /></div>
            <div className="s-row s-split"><small><b>{used} GB</b> used</small><small>{photos}</small></div>
          </div>
        ))}
      </div>
      <div className="s-button">＋ Add another Google account</div>
    </>
  )
}

// ---------- Backup & schedule ----------

export function BackupScreen() {
  return (
    <>
      <StatusBar />
      <div className="s-body">
        <div className="s-title">Backup</div>
        <div className="s-card s-row">
          <div className="s-grow"><b>Automatic backup</b><small>Next: tonight at 2:00 AM</small></div>
          <i className="s-switch" />
        </div>
        <div className="s-seg"><span className="is-on">Daily</span><span>Weekly</span></div>
        <div className="s-time">
          <small className="s-caps">Every day at</small>
          <div><b>2</b><span>:</span><b>00</b><em><i className="is-on">AM</i><i>PM</i></em></div>
        </div>
        <div className="s-card s-row">
          <div className="s-grow"><b>Wi-Fi only</b></div>
          <i className="s-switch" />
        </div>
        <div className="s-card s-row">
          <div className="s-grow"><b>Only while charging</b></div>
          <i className="s-switch is-off" />
        </div>
        <div className="s-card s-row">
          <i className="s-check">✓</i>
          <div className="s-grow"><small>Last backup</small><b>Today, 2:00 AM</b></div>
          <div className="s-free"><b>248</b><small>items saved</small></div>
        </div>
      </div>
      <div className="s-button">↑ Back up now</div>
    </>
  )
}

// ---------- Upload progress ----------

const uploads = [
  { file: 'VID_0412.mp4', size: '32 of 61 MB', p: 52, i: 1 },
  { file: 'IMG_2031.jpg', size: '4 of 12 MB', p: 35, i: 4 },
]

export function UploadScreen() {
  return (
    <>
      <div className="s-plum">
        <StatusBar light />
        <div className="s-head">
          <b className="s-title">Backing up</b>
          <span className="s-chip is-ghost">❚❚ Pause</span>
        </div>
        <div className="s-ring is-large" style={{ '--p': 58 }}>
          <div><b>58%</b><small>7 of 12 items</small></div>
        </div>
        <small className="s-center">About 4 min left · 2.1 MB/s</small>
      </div>
      <div className="s-sheet">
        <div className="s-card s-row s-resumed">
          <i className="s-thumb" style={{ background: scene(6) }} />
          <div className="s-grow"><b>VID_0388.mp4</b><small>Resumed after connection drop</small></div>
          <span className="s-tag is-ok">Done</span>
        </div>
        <small className="s-caps">Uploading · 2</small>
        {uploads.map(({ file, size, p, i }) => (
          <div className="s-row s-upload" key={file}>
            <i className="s-thumb" style={{ background: scene(i) }} />
            <div className="s-grow">
              <div className="s-row s-split"><b>{file}</b><small>{p}%</small></div>
              <div className="s-meter"><i style={{ width: `${p}%`, background: accountColors[0] }} /></div>
              <small>{size}</small>
            </div>
          </div>
        ))}
        <small className="s-caps">Up next · 3</small>
        <div className="s-row s-upload">
          <i className="s-thumb" style={{ background: scene(2) }} />
          <div className="s-grow"><b>IMG_2032.jpg</b><small>and 2 more</small></div>
          <span className="s-tag">Queued</span>
        </div>
      </div>
    </>
  )
}

// ---------- Storage full: hand over to the next account ----------

const handover = [
  { name: 'Account A', note: '15 of 15 GB', tag: 'Full', tone: 'is-warn' },
  { name: 'Account B', note: '10.9 GB free', tag: 'Now saving', tone: 'is-ok' },
  { name: 'Account C', note: '14.2 GB free', tag: 'Next', tone: '' },
]

export function StorageFullScreen() {
  return (
    <>
      <div className="s-plum is-warm">
        <StatusBar light />
        <div className="s-center">
          <b className="s-title">Account A is full</b>
          <small>Saving VID_001.mp4 · 1.4 GB</small>
        </div>
        <div className="s-jar">
          <i className="s-lid" />
          <div className="s-glass">
            <div className="s-liquid" />
            <div className="s-jar-label"><b>100%</b><small>15 / 15 GB</small></div>
          </div>
          <span className="s-badge">FULL</span>
        </div>
      </div>
      <div className="s-sheet">
        <div className="s-switching">
          <b>Switched to Account B</b>
          <small>The rest of the backup carries on there.</small>
        </div>
        {handover.map(({ name, note, tag, tone }, i) => (
          <div className="s-row s-handover" key={name}>
            <i className="s-dot" style={{ background: accountColors[i] }} />
            <div className="s-grow"><b>{name}</b><small>{note}</small></div>
            <span className={`s-tag ${tone}`}>{tag}</span>
          </div>
        ))}
      </div>
    </>
  )
}
