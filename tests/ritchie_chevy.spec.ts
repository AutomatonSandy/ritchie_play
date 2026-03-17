import{test,expect}from '../fixtures/BeforeAndAfterTest';
import {PageObjectManager} from '../pages/PageObjectManager';    



test('ritchie chevy related tests @chevy @smoke',async({page})=>{  
   await page.screenshot({path: 'test-results/before-test.png'});
   const searchTerm = 'Chevrolet Colorado'; 
   const pageManager = new PageObjectManager(page);
   await pageManager.getTopPanel().searchOnTopPanel(searchTerm);
   const numberOfResults = await pageManager.getSearchResults().extractNumberOfResults();
   console.log(`Number of results extracted: ${numberOfResults}`);
   await expect(numberOfResults).toBeGreaterThan(0);
   const firstResultTitle = await pageManager.getSearchResults().returnTheFirstResultTitle();
   console.log(`First result title extracted: ${firstResultTitle}`);
   await expect(firstResultTitle).toContain(searchTerm);

})