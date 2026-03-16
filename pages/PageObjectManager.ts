import { Page } from "@playwright/test";
import { TopPanel} from "./TopPanel";
import { SearchResults } from "./SearchResults";    

export class PageObjectManager{
    readonly page: Page;
    readonly topPanel: TopPanel;
    readonly searchResults: SearchResults;


    constructor(page: Page) {
        this.page = page;
        this.topPanel = new TopPanel(page);
        this.searchResults = new SearchResults(page);
        }


        getTopPanel(){
            return this.topPanel;
        }

        getSearchResults(){
            return this.searchResults;
        }   


        
    }