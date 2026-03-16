import{test,expect}from '../fixtures/BeforeAndAfterTest';
import {TopPanel} from '../pages/TopPanel';    


test('ritchie ford',async({page})=>{   
   const topPanel = new TopPanel(page);
   await topPanel.searchOnTopPanel('Ford F-150');
})