import { Page } from "@playwright/test";
import { TopPanel} from "./TopPanel";
import { SearchResults } from "./SearchResults";    
import { FilterFramePage } from "./FilterFramePage";

export class PageObjectManager{
    readonly page: Page;
    readonly topPanel: TopPanel;
    readonly searchResults: SearchResults;
    readonly filterFramePage: FilterFramePage;

    constructor(page: Page) {
        this.page = page;
        this.topPanel = new TopPanel(page);
        this.searchResults = new SearchResults(page);
        this.filterFramePage = new FilterFramePage(page);
        }


        getTopPanel(){
            return this.topPanel;
        }

        getSearchResults(){
            return this.searchResults;
        }   

        getFilterFramePage(){
            return this.filterFramePage;
        }

        
    }