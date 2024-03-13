import { APIRequest, APIRequestContext, BrowserContext, Page } from "@playwright/test";
import User from "../Models/UserInit";
import UserAPI from "../APIs/UserRequest";
import config from "../playwright.config";

export default class SignUpPage {
    async load(page: Page){
        await page.goto('/signup');
    }

    private get firstNameInput() {
        return "//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl']//input[@data-testid='first-name']";
    }

    private get lastNameInput() {
        return '[data-testid=last-name]';
    }

    private get emailInput() {
        return '[data-testid=email]';
    }

    private get passwordInput() {
        return '[data-testid=password]';
    }

    private get passwordProove() {
        return '[data-testid=confirm-password]';
    }

    private get summitButton() {
        return '[data-testid=submit]';
    }

    async signUp (page: Page, user: User) {
        await page.fill(this.firstNameInput, user.getFirstName());
        await page.fill(this.lastNameInput, user.getLastName());
        await page.fill(this.emailInput, user.getEmail());
        await page.fill(this.passwordInput, 'Test1234');
        await page.fill(this.passwordProove, 'Test1234');
        await page.click(this.summitButton);
    }

    async signUpUsingAPI (request: APIRequestContext, user: User, context: BrowserContext){

        const responce = await new UserAPI().signup(request, user);
        const responceBody = await responce.json();
        const access_token = responceBody.access_token;
        const firstName = responceBody.firstName;
        const userID = responceBody.userID;

        await context.addCookies([
            {
                name: 'access_token',
                value: access_token,
                url: config.use?.baseURL,
            },
            {
                name: 'firstName',
                value: firstName,
                url: config.use?.baseURL,
            },
            {
                name: 'userID',
                value: userID,
                url: config.use?.baseURL,
            }
        ]);
    } 
}