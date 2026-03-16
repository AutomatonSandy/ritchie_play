import {test as setup} from '@playwright/test';

export const test = setup.extend({
    page: async ({ page }, use) => {
        await page.goto('https://www.rbauction.com/');
        await page.waitForLoadState('domcontentloaded');
        await use(page);
        await page.close();
    }
});

export { expect} from '@playwright/test';
