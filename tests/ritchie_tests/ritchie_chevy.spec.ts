import{test,expect}from '../../fixtures/BeforeAndAfterTest.ts';
import { searchAndCheckResults } from './baseTests.ts';



test('ritchie chevy related tests @chevy @smoke',async({page}, testInfo)=>{  

   const searchTerm = 'Chevrolet Colorado'; 
   await searchAndCheckResults({page}, testInfo, searchTerm);

})