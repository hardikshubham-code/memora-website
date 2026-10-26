# Memora website

Site for Memora: home page, Privacy Policy and Terms of Service. Built with React and Vite. Each page is pre-rendered to plain HTML at build time, so the pages read fine without JavaScript (search engines, Google's OAuth verification).

```
index.html, privacy.html, terms.html   Page shells: <head> tags (title, description, icons) for each page
src/pages/Home.jsx                     Home page
src/pages/Privacy.jsx                  Privacy Policy
src/pages/Terms.jsx                    Terms of Service
src/components/Layout.jsx              Header (logo + nav) and footer shared by every page
src/components/PlayButton.jsx          "Coming soon to Google Play" button
src/components/AppScreens.jsx          Phone screens drawn in CSS after the app wireframes (wireframe.html)
src/styles.css                         Shared styles (colour tokens based on lib/app/theme.dart)
src/main.jsx, src/entry-server.jsx     Browser and build-time entry points
scripts/prerender.js                   Writes the rendered pages into dist/*.html
public/assets/                         Logo, app icon and photos (Unsplash License), copied as-is
```

## Commands

Needs Node.js 20.19+ or 22.12+.

- `npm install`: install dependencies (first time only)
- `npm run dev`: local dev server with live reload, at the URL it prints
- `npm run build`: build the site into `dist/`
- `npm run preview`: serve the built `dist/` folder locally

The URLs are the same as before: `/` (or `/index.html`), `/privacy.html` and `/terms.html`.

## Before publishing

Placeholders are highlighted in yellow (`.fill`) on the legal pages. Replace:

- `[Developer or company name]`: src/pages/Privacy.jsx, src/pages/Terms.jsx
- `support@example.com`: src/pages/Privacy.jsx, src/pages/Terms.jsx, footer in src/components/Layout.jsx
- `[Postal address, if required]`: src/pages/Privacy.jsx, src/pages/Terms.jsx
- `[country / state]` and `[city, country]` (governing law): src/pages/Terms.jsx §16
- Play Store buttons: both "Coming soon to Google Play" buttons on the home page (hero and `#download`) come from src/components/PlayButton.jsx. Once the listing is live, change its `<span className="btn btn-primary is-soon">` into `<a className="btn btn-primary" href="<listing URL>">` and change the text back to "Get it on Google Play". Note: `com.memora.memora` is already taken on Google Play by another developer, so the app needs a different application ID before it can be published.

Keep the legal pages in step with the app: if Memora adds Crashlytics, analytics, new scopes or new permissions, update src/pages/Privacy.jsx §3–§5 and the "Last updated" dates.

## Google OAuth verification

The Google Cloud OAuth consent screen needs a homepage URL and a privacy policy URL on a domain you own and have verified in Search Console. Run `npm run build` and host the `dist/` folder there (GitHub Pages, Firebase Hosting, Netlify, etc.), then use `/` and `/privacy.html`. The privacy policy already includes the Google API Services User Data Policy / Limited Use statement that verification looks for.
