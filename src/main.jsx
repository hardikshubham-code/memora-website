import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { pages } from './pages.js'
import './styles.css'

const root = document.getElementById('root')
const Page = pages[root.dataset.page]
const app = (
  <StrictMode>
    <Page />
  </StrictMode>
)

// Built pages arrive pre-rendered, so React only attaches to them; the dev server serves an empty root.
if (root.firstElementChild) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
