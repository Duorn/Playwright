import { Page } from "@playwright/test";


export default class ToDoPage{
    private get welcomeMessage(){
        return '[data-testid=welcome]';
    }

    getWelcomeMassageElement (page:Page){
        return page.locator(this.welcomeMessage);
    }

    async goToToDo (page: Page){
        await page.goto('/todo');
    }

    private get buttonCreateNewToDo() {
        return "//div[@class='sc-idiyUo hWRklb']//button[@class='MuiButtonBase-root MuiIconButton-root']";
    }

    getbuttonCreateNewToDo(page: Page){
        return page.click(this.buttonCreateNewToDo);
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