import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { pages } from './pages.js'

export function render(name) {
  const Page = pages[name]
  return renderToString(
    <StrictMode>
      <Page />
    </StrictMode>,
  )
}
