import {Page, test} from '@playwright/test';

export class TopPanel{
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;
        }  
        
     
   public async searchOnTopPanel(searchText: string){
        await this.page.getByTestId('search input').locator('input').fill(searchText);
        await this.page.getByTestId('search button').press('Enter');
    }        
        
}