import puppeteer from 'puppeteer';
import { existsSync, mkdirSync } from 'fs';
import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'temporary screenshots');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const existing = existsSync(outDir)
  ? readdirSync(outDir).filter(f => f.endsWith('.png')).length
  : 0;

const filename = label
  ? `screenshot-${existing + 1}-${label}.png`
  : `screenshot-${existing + 1}.png`;

const outPath = join(outDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 2400)); // let loader animate out
await page.screenshot({ path: outPath, fullPage: false });
await browser.close();

console.log(outPath);
