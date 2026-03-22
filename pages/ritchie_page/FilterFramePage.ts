import { Page } from "@playwright/test";

export class FilterFramePage{
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnFilterOption(filterOption: string){
        await this.page.getByText(filterOption).click();
    }

    public async fillInTheMinimumYearFilter(minimumYear: string){
         const minimumYearFilter = 'manufactureYearRange_min';
         const minimumYearFilterInput = await this.page.locator(`#${minimumYearFilter}`);

        await minimumYearFilterInput.clear();
        await minimumYearFilterInput.fill(minimumYear);
        await minimumYearFilterInput.press('Enter');
    }

}