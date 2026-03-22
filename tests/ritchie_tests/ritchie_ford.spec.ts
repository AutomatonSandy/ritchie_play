import{test,expect}from '../../fixtures/BeforeAndAfterTest.ts';
import { searchAndCheckResults, getNumberOfResults, getFirstResultTitle } from './baseTests.ts';
import { PageObjectManager } from '../../pages/ritchie_page/PageObjectManager.ts';



test('ritchie ford related tests @ford @smoke',async({page}, testInfo)=>{  
   const searchTerm = 'Ford F-150';
   await searchAndCheckResults({page}, testInfo, searchTerm);

});

test('ritchie ford related tests, update year and check the results @ford @regression',async({page}, testInfo)=>{  
   const searchTerm = 'F-150'; 
   const filterOption = 'Year';
   const pageManager = new PageObjectManager(page);
   const minimumYearFilterValue = '2022';  

   await searchAndCheckResults({page}, testInfo, searchTerm);
   console.log(' Trying to put year '+ minimumYearFilterValue);
   await pageManager.getSearchResults().clickOnTheFooterCookieButton();
   await pageManager.getFilterFramePage().clickOnFilterOption(filterOption);
   await pageManager.getFilterFramePage().fillInTheMinimumYearFilter(minimumYearFilterValue);
   
   await pageManager.getSearchResults().waitForReloadOfBidNow();

   console.log("After updating year :: ");
   await getNumberOfResults(pageManager,testInfo);
   await getFirstResultTitle(pageManager,testInfo);

});
