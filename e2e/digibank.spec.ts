import { test, expect, type Page } from '@playwright/test';

const username = 'jsmith@demo.io';
const password = 'Demo123!';
const baseURL = process.env.SUT ? process.env.SUT : 'http://3.16.21.252:8080/bank/login';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

test.describe('feature foo', () => {
  test('basic test', async ({ page }) => {
    await page.fill('[id="username"]', username);

    await page.fill('[id="passwordInput"]', password);
    await page.click('[id="submit"]');

    const title = await page.title();
    console.log('Page title:: ', title);

    expect(title).toEqual('Digital Bank');
  });
});
