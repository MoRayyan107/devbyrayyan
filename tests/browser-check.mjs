import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const page = await browser.newPage();
  const runtimeErrors = [];
  page.on('pageerror', (error) => runtimeErrors.push(error.message));
  page.on('response', (response) => {
    if (response.url().startsWith('http://127.0.0.1:5173/') && response.status() >= 400) {
      runtimeErrors.push(`${response.status()} ${response.url()}`);
    }
  });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('http://127.0.0.1:5173/devbyrayyan/');
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(() =>
      [...document.querySelectorAll('main *')]
        .filter((el) => {
          const r = el.getBoundingClientRect();
          return r.width && (r.right > innerWidth + 1 || r.left < -1);
        })
        .map((el) => el.className || el.tagName),
    );
    assert.deepEqual(overflow, [], `Overflow at ${width}px: ${overflow}`);
    const missingTargets = await page.evaluate(() =>
      [...document.querySelectorAll('a[href^="#"]')]
        .map((a) => a.getAttribute('href'))
        .filter((href) => href !== '#' && !document.getElementById(href.slice(1))),
    );
    assert.deepEqual(missingTargets, []);
    if (width < 761) {
      await page.getByRole('button', { name: 'Menu +' }).click();
      await page.getByRole('link', { name: 'Certificates', exact: true }).click();
      assert.equal(
        await page.getByRole('button', { name: 'Menu +' }).getAttribute('aria-expanded'),
        'false',
      );
    }
    await page.getByRole('link', { name: 'See VaultGuard' }).click();
    await page.waitForURL('**/vaultguard.html');
    await page.reload();
    await page.locator('#load-test-title').waitFor();
    assert.equal(await page.locator('vite-error-overlay').count(), 0);
    assert.deepEqual(runtimeErrors, [], 'Runtime or local module loading errors');
    const caseOverflow = await page.evaluate(() =>
      [...document.querySelectorAll('main *')]
        .filter((el) => {
          const r = el.getBoundingClientRect();
          return r.width && (r.right > innerWidth + 1 || r.left < -1);
        })
        .map((el) => el.className || el.tagName),
    );
    assert.deepEqual(caseOverflow, [], `Case study overflow at ${width}px`);
    await page.getByRole('link', { name: 'Back to work', exact: true }).click();
    await page.waitForURL('**/devbyrayyan/#vaultguard');
    for (const href of await page
      .locator('a[download]')
      .evaluateAll((links) => links.map((a) => a.href))) {
      const response = await page.request.get(href);
      assert.equal(response.status(), 200);
      assert.equal((await response.body()).subarray(0, 4).toString(), '%PDF');
    }
    if (width === 390) {
      await page.goto('http://127.0.0.1:5173/devbyrayyan/');
      await page.screenshot({
        path: 'node_modules/.cache/portfolio-mobile.png',
        fullPage: true,
      });
    }
    console.log(`${width}px: layout, navigation, case study, and PDF links passed`);
  }
} finally {
  await browser.close();
}
