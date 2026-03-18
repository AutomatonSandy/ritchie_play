import{test,expect}from '../fixtures/BeforeAndAfterTest';
import { searchAndCheckResults } from './baseTests.ts';
import {PageObjectManager} from '../pages/PageObjectManager';    



test('ritchie chevy related tests @chevy @smoke',async({page}, testInfo)=>{  

   const searchTerm = 'Chevrolet Colorado'; 
   await searchAndCheckResults({page}, testInfo, searchTerm);

})