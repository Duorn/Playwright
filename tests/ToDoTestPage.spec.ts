import { test, expect } from '@playwright/test';
import SignUpPage from '../Pages/SignUpPages';
import User from '../Models/UserInit';
import ToDoPage from '../Pages/ToDoPages';
import ToDoPages from '../Pages/ToDoPages';

test('should be able to add a new todo', async ({ page }) => {
 
    const signUpPage = new SignUpPage();
    const user = new User();
    const toDoPage = new ToDoPages();

    await signUpPage.load(page);
    await signUpPage.signUp(page, user);

    const welcomeMessage = toDoPage.getWelcomeMassageElement(page);
    await expect(welcomeMessage).toBeVisible();

    await page.click('[data-testid=add]');
    await page.fill('[data-testid=new-todo]', 'Learn Playwright!');
    await page.click('[data-testid=submit-newTask]');

    const todoItem = await page.locator('[data-testid=todo-item]');
    expect(await todoItem.innerText()).toEqual('Learn Playwright!');
});

test('should be able to delete a todo', async ({ page }) => {
    
    const signUpPage = new SignUpPage();
    const user = new User();
    const toDoPage = new ToDoPage();

    await signUpPage.load(page);
    await signUpPage.signUp(page, user);
  
    await toDoPage.getbuttonCreateNewToDo(page);
    await toDoPage.addToDo(page, "firstToDo");

    await page.click("//div[@class='sc-ksZaOG hLUPXI']//button[@class='MuiButtonBase-root MuiIconButton-root']");
});