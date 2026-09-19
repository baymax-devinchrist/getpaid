import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })

await page.goto('http://127.0.0.1:5173')
await page.selectOption('#language', 'en')
await page.getByRole('heading', { name: /Your money/i }).waitFor()

const result = {
  language: await page.locator('html').getAttribute('lang'),
  selector: await page.locator('#language').inputValue(),
  heading: await page.locator('h1').innerText(),
  persisted: await page.evaluate(() => localStorage.getItem('getpaid-language')),
}

console.log(JSON.stringify(result, null, 2))

for (const width of [390, 1024, 1440]) {
  await page.setViewportSize({ width, height: 900 })
  await page.reload()
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }))
  if (dimensions.content > dimensions.viewport) {
    throw new Error(`Horizontal overflow at ${width}px: ${dimensions.content}px content width`)
  }
  console.log(`${width}px viewport: no horizontal overflow`)
}

await browser.close()
