import { Page } from "@playwright/test";
import { Expect } from "@playwright/test";

export class SearchResults{
    readonly page: Page; 
    
    
    constructor(page: Page) {
        this.page = page;
        }       

     public async extractNumberOfResults(){
        const resultsTextHeader = 'non-cat-header';
        const splitString1 = 'of';
        const splitString2 = 'results';

        const resultsText = await this.page.getByTestId(resultsTextHeader).textContent();
        const numberOfResults = parseInt(resultsText?.split(splitString1)[1].split(splitString2)[0].trim() || '0');
        return numberOfResults;
    }
    
    public async returnTheFirstResultTitle(){
        const itemCardTitleLink = 'item-card-title-link';
        
        const firstResultTitle = await this.page.getByTestId(itemCardTitleLink).first().textContent();
        return firstResultTitle?.trim() || '';
    }   

}