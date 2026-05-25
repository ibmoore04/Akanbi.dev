/**
 * Generates akanbi-ibrahim-cv.pdf from the HTML CV file.
 * Uses the system Edge or Chrome browser in headless mode — no extra npm packages needed.
 *
 * Run once with:  node scripts/generate-cv-pdf.mjs
 */

import { execFileSync } from 'child_process';
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlFile = resolve(__dirname, '../public/akanbi-ibrahim-cv.html');
const outputPdf = resolve(__dirname, '../public/akanbi-ibrahim-cv.pdf');

// Common browser paths on Windows
const browserPaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];

const browser = browserPaths.find(p => existsSync(p));

if (!browser) {
  console.error('❌  Could not find Edge or Chrome. Please install one and retry.');
  process.exit(1);
}

console.log(`✅  Using browser: ${browser}`);
console.log(`📄  Input:  ${htmlFile}`);
console.log(`📄  Output: ${outputPdf}`);

const fileUrl = `file:///${htmlFile.replace(/\\/g, '/')}`;

try {
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--run-all-compositor-stages-before-draw',
    '--print-to-pdf-no-header',
    `--print-to-pdf=${outputPdf}`,
    fileUrl,
  ], { stdio: 'inherit' });

  console.log(`\n✅  PDF saved to: ${outputPdf}`);
} catch (err) {
  console.error('❌  Failed to generate PDF:', err.message);
  process.exit(1);
}
