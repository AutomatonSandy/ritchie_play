import { TestInfo } from '@playwright/test';
import{test,expect}from '../fixtures/BeforeAndAfterTest';
import {PageObjectManager} from '../pages/PageObjectManager';    


export async function searchAndCheckResults({page}, testInfo, searchTerm) {
    await page.screenshot({ path: 'test-results/before-test.png' });
    const prefix = `[${testInfo.project.name.concat('>').concat(testInfo.titlePath.join(' > '))}]`;
    const pageManager = new PageObjectManager(page);

    await pageManager.getTopPanel().searchOnTopPanel(searchTerm);
    await getNumberOfResults(pageManager, testInfo);
    await expect(await getFirstResultTitle(pageManager,testInfo)).toContain(searchTerm);
 }

 export async function getNumberOfResults(pageManager: PageObjectManager, testInfo:TestInfo){
   const prefix = `[${testInfo.project.name.concat('>').concat(testInfo.titlePath.join(' > '))}]`;
    const numberOfResults = await pageManager.getSearchResults().extractNumberOfResults();
    console.log(`${prefix} Number of results extracted: ${numberOfResults}`);
    await expect(numberOfResults).toBeGreaterThan(0);
 }

 export async function getFirstResultTitle(pageManager: PageObjectManager, testInfo:TestInfo) {
   const prefix = `[${testInfo.project.name.concat('>').concat(testInfo.titlePath.join(' > '))}]`;
    const firstResultTitle = await pageManager.getSearchResults().returnTheFirstResultTitle();
    console.log(`${prefix} First result title extracted: ${firstResultTitle}`);
    return firstResultTitle;
 }
