import {Page, Locator} from "@playwright/test"

//export is used because we can use this class in tests/outside of folder.
export class LoginPage{
    // readonly because they should not access directly this class.
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.locator('[data-test=error]');
    }

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(user: string, pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }


    // Why this is commented: Because in Page class we only keep locators & Actions, not a assertion
    // async verifyLoginSuccess(){
    //     await this.page.waitForURL("https://www.saucedemo.com/inventory.html");
    // }

}