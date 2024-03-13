import { test, expect } from '@playwright/test';
import UserInit from '../Models/UserInit';
import SignUpPage from '../Pages/SignUpPages';
import ToDoPage from '../Pages/ToDoPages';
import NewToDoPage from '../Pages/NewToDoPage';

test('has litle', async ({ page, request, context }) => {

  const user = new UserInit();
  const signUpPage = new SignUpPage();
  const newToDo = new NewToDoPage();

  await signUpPage.signUpUsingAPI(request, user, context);

  await newToDo.goToToDo(page);
  await newToDo.addToDo(page, "Learn PlayWright");

  // await page.pause();

  const todoItem = page.locator("//div[@class='sc-breuTD dIVhJd']");
  expect(await todoItem.innerText()).toEqual('Learn PlayWright');
});

test('Test of creating of ToDo', async ({ page, request, context }) => {

  const user = new UserInit();
  const signUpPage = new SignUpPage();
  const toDoPage = new ToDoPage();

  await signUpPage.signUpUsingAPI(request, user, context);
  await toDoPage.goToToDo(page);

  // await page.pause();

  await toDoPage.getbuttonCreateNewToDo(page);
  await toDoPage.addToDo(page, "firstToDo");

  // await page.pause();
});