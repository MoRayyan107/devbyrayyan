import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';

const base = 'http://127.0.0.1:5173/devbyrayyan/';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const runtimeErrors = [];

async function checkOverflow(page, width) {
  const overflow = await page.evaluate(() =>
    [...document.querySelectorAll('main *')]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width && (r.right > innerWidth + 1 || r.left < -1);
      })
      .map((el) => el.className || el.tagName),
  );
  assert.deepEqual(overflow, [], `Overflow at ${width}px: ${overflow}`);
}

try {
  const page = await browser.newPage();
  page.on('pageerror', (error) => runtimeErrors.push(error.message));
  page.on('response', (response) => {
    if (response.url().startsWith(base) && response.status() >= 400) {
      runtimeErrors.push(`${response.status()} ${response.url()}`);
    }
  });

  for (const width of [320, 390, 720, 768, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(base);
    await page.evaluate(() => document.fonts.ready);
    await checkOverflow(page, width);
    assert.equal(await page.locator('.hero .proof').count(), 0);
    assert.equal(
      await page
        .getByRole('region', { name: 'VaultGuard transaction simulation' })
        .count(),
      0,
    );
    assert.equal(await page.locator('#about .content-placeholder').count(), 0);
    const sectionOrder = await page
      .locator('main section[id]')
      .evaluateAll((sections) => sections.map((section) => section.id));
    assert.ok(sectionOrder.indexOf('about') < sectionOrder.indexOf('work'));
    const missingTargets = await page.evaluate(() =>
      [...document.querySelectorAll('a[href^="#"]')]
        .map((a) => a.getAttribute('href'))
        .filter((href) => href !== '#' && !document.getElementById(href.slice(1))),
    );
    assert.deepEqual(missingTargets, []);

    if (width < 761) {
      await page.getByRole('button', { name: 'Menu +' }).click();
      await page.getByRole('link', { name: 'About', exact: true }).focus();
      await page.keyboard.press('Escape');
      assert.equal(
        await page.getByRole('button', { name: 'Menu +' }).getAttribute('aria-expanded'),
        'false',
      );
      assert.equal(
        await page
          .getByRole('button', { name: 'Menu +' })
          .evaluate((el) => el === document.activeElement),
        true,
      );
      await page.getByRole('button', { name: 'Menu +' }).click();
      await page.getByRole('link', { name: 'About', exact: true }).click();
      assert.equal(
        await page.getByRole('button', { name: 'Menu +' }).getAttribute('aria-expanded'),
        'false',
      );
    }
    await page.getByRole('link', { name: 'Explore my projects' }).click();
    await page.waitForURL('**/#work');
    await page.getByRole('link', { name: 'Behind VaultGuard' }).click();
    await page.waitForURL('**/vaultguard.html');
    await page.reload();
    await page.locator('#load-test-title').waitFor();
    assert.equal(
      await page
        .getByRole('region', { name: 'VaultGuard transaction simulation' })
        .count(),
      1,
    );
    await checkOverflow(page, width);
    if (width <= 900) {
      const controls = await page.locator('.flow-controls').boundingBox();
      const diagram = await page.locator('.project-notebook').boundingBox();
      assert.ok(
        controls.y < diagram.y,
        'Mobile controls should appear before the flow diagram',
      );
    }
    await page.locator('.test-detail summary').click();
    await expect(page.getByText('222,965', { exact: true })).toBeVisible();
    await checkOverflow(page, width);
    await page.locator('.test-detail summary').click();
    assert.equal(await page.locator('vite-error-overlay').count(), 0);
    await page.getByRole('link', { name: 'Back to work', exact: true }).click();
    await page.waitForURL('**/devbyrayyan/#vaultguard');
    // The game write-ups live on the homepage; their old pages were removed.
    for (const name of ['Zero Hour', 'Duck Run']) {
      assert.equal(
        await page
          .getByRole('link', { name: `Play ${name} in a new tab`, exact: true })
          .getAttribute('target'),
        '_blank',
      );
    }
    assert.equal(await page.locator('a[href$="zero-hour.html"]').count(), 0);
    assert.equal(await page.locator('a[href$="duck-run.html"]').count(), 0);
    for (const href of await page
      .locator('a[download]')
      .evaluateAll((links) => links.map((a) => a.href))) {
      const response = await page.request.get(href);
      assert.equal(response.status(), 200);
      assert.equal((await response.body()).subarray(0, 4).toString(), '%PDF');
    }
    if (width === 390) {
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      console.log(`390px homepage height: ${height}px (previously 7624px)`);
      assert.ok(
        height < 5718,
        'Homepage should be at least 25% shorter than the previous version',
      );
    }
    console.log(`${width}px: homepage, case study, navigation, and CV passed`);
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}vaultguard.html`);
  const demo = page.getByRole('region', { name: 'VaultGuard transaction simulation' });
  await demo.getByRole('button', { name: 'Send a transaction', exact: true }).click();
  assert.equal(
    await demo.getByRole('radio', { name: 'Normal', exact: true }).isDisabled(),
    true,
  );
  const send = demo.getByRole('button', { name: 'Following transaction…' });
  assert.equal(await send.getAttribute('aria-disabled'), 'true');
  await demo.getByRole('button', { name: 'Run again' }).waitFor();
  assert.match(await demo.getByRole('status').innerText(), /complete.*low risk/);
  assert.equal(await demo.locator('.flow-stage.is-active').count(), 1);

  await demo.getByRole('radio', { name: 'Suspicious', exact: true }).check();
  await demo.getByRole('button', { name: 'Send a transaction', exact: true }).click();
  await demo.getByRole('button', { name: 'Run again' }).waitFor();
  assert.match(
    await demo.getByRole('status').innerText(),
    /complete.*flagged for human review/,
  );
  await demo.getByRole('button', { name: 'Run again' }).click();
  await demo.getByRole('button', { name: 'Reset', exact: true }).click();
  await page.waitForTimeout(4200);
  assert.equal(await demo.locator('.flow-idle').count(), 1);
  assert.equal(await demo.locator('.is-active').count(), 0);
  assert.equal(
    await demo
      .getByRole('button', { name: 'Send a transaction', exact: true })
      .isVisible(),
    true,
  );
  console.log('Both transaction outcomes, replay, and reset cancellation passed');

  // Native keyboard controls, disclosure, and reduced-motion fallback.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await demo.getByRole('radio', { name: 'Normal', exact: true }).focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(
    await demo.getByRole('radio', { name: 'Suspicious', exact: true }).isChecked(),
    true,
  );
  await demo.getByRole('button', { name: 'Send a transaction', exact: true }).focus();
  await page.keyboard.press('Enter');
  assert.equal(
    await demo.locator('.flow-traveller').evaluate((el) => getComputedStyle(el).display),
    'none',
  );
  await demo.getByRole('button', { name: 'Run again' }).waitFor();
  assert.match(await demo.getByRole('status').innerText(), /flagged for human review/);
  const detail = demo.locator('summary');
  await detail.focus();
  await page.keyboard.press('Enter');
  assert.equal(await demo.locator('details').getAttribute('open'), '');
  assert.equal(await detail.evaluate((el) => getComputedStyle(el).outlineStyle), 'solid');
  await checkOverflow(page, 390);
  await page.keyboard.press('Enter');
  assert.equal(await demo.locator('details').getAttribute('open'), null);
  assert.equal(
    await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
    'auto',
  );
  console.log('Keyboard, technical disclosure, focus, and reduced motion passed');

  // Exercise clipboard success and failure independently of OS clipboard access.
  await page.goto(base);
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (value) => {
          window.copiedEmail = value;
        },
      },
    });
  });
  await page.getByRole('button', { name: 'Copy email', exact: true }).click();
  assert.equal(
    await page.evaluate(() => window.copiedEmail),
    'rayyan.adhoni@outlook.com',
  );
  assert.equal(
    await page.getByRole('button', { name: 'Copied', exact: true }).isVisible(),
    true,
  );
  await page.getByRole('button', { name: 'Copy email', exact: true }).waitFor();
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async () => {
          throw new Error('Clipboard denied');
        },
      },
    });
  });
  await page.getByRole('button', { name: 'Copy email', exact: true }).click();
  assert.match(await page.locator('.copy-status').innerText(), /Select and copy/);
  console.log('Copy-email success and failure feedback passed');

  await page.goto(base);
  await page.screenshot({
    path: 'node_modules/.cache/portfolio-mobile.png',
    fullPage: true,
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  await page.screenshot({
    path: 'node_modules/.cache/portfolio-desktop.png',
    fullPage: true,
  });
  assert.deepEqual(runtimeErrors, [], 'Runtime or local asset loading errors');
  console.log('No runtime or local asset errors; mobile and desktop screenshots saved');
} finally {
  await browser.close();
}
