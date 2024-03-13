import { Page } from "@playwright/test";

export default class NewToDoPage{

    async goToToDo (page: Page){
        await page.goto('/todo/new');
    }
    
    private get fieldOfOurToDo(){
        return  "//input[@class='MuiInputBase-input MuiOutlinedInput-input']";
    }

    private get createToDoButton(){
        return "//button[@data-testid='submit-newTask']"
    }

    async addToDo(page: Page, ourToDo: string){
        await page.fill(this.fieldOfOurToDo, ourToDo);
        await page.click(this.createToDoButton);
    }
}