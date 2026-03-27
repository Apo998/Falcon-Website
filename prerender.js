import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
const { render } = await import('./.server/entry-server.js')

const routes = [
  '/',
  '/about',
  '/services',
  '/services/veranstaltungsschutz',
  '/services/kaufhausdetektive',
  '/services/baustellenueberwachung',
  '/services/zugangskontrollen',
  '/services/objektschutz',
  '/services/revierfahren',
  '/services/schutzdienst',
  '/services/personenschutz',
  '/services/ausbildung',
  '/services/andere',
  '/contact',
  '/impressum',
  '/datenschutz',
  '/falconsecpro-support',
  '/falconsecpro-privacy'
]

async function prerender() {
  for (const url of routes) {
    const rendered = await render(url)
    
    let html = template.replace(`<!--app-html-->`, rendered.html ?? '')
    
    if (rendered.helmet) {
      let helmetTags = `
        ${rendered.helmet.title ? rendered.helmet.title.toString() : ''}
        ${rendered.helmet.meta ? rendered.helmet.meta.toString() : ''}
        ${rendered.helmet.link ? rendered.helmet.link.toString() : ''}
      `
      html = html.replace('<!--app-head-->', helmetTags)
    } else {
      html = html.replace('<!--app-head-->', '')
    }

    const filePath = path.join(__dirname, 'dist', url === '/' ? 'index.html' : `${url}/index.html`)
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(filePath, html)
    console.log('pre-rendered:', filePath)
  }
}

prerender()
