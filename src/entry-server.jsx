import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import './i18n'

export function render(url, context) {
  const helmetContext = {}
  
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url} basename={import.meta.env?.BASE_URL || '/'}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  )
  
  const { helmet } = helmetContext
  
  return { html, helmet }
}
