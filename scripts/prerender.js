// Writes each page's HTML into dist/*.html so the site works without JavaScript
// (search engines and Google's OAuth verification read the policy pages as plain HTML).
import { readFile, rm, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const serverBuild = new URL('../dist-server/', import.meta.url)
const { render } = await import(new URL('entry-server.js', serverBuild))

for (const name of ['index', 'privacy', 'terms']) {
  const file = new URL(`${name}.html`, dist)
  const html = await readFile(file, 'utf8')
  if (!html.includes('<!--app-->')) throw new Error(`${name}.html has no <!--app--> placeholder`)
  await writeFile(file, html.replace('<!--app-->', render(name)))
}

await rm(serverBuild, { recursive: true })
console.log('Pre-rendered index.html, privacy.html and terms.html')
