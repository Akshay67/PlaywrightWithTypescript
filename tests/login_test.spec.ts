import {expect, test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import loginData from '../test-data/loginData.json'

 test ('valid user login test', async ({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    //await loginPage.login("standard_user","secret_sauce"); // this is hardcoded data
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    )

    //await loginPage.verifyLoginSuccess();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
 });

 test ('Invalid user login test', async ({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    //await loginPage.login("standard_user","secret_sauce"); // this is hardcoded data
    await loginPage.login(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    )

    //await loginPage.verifyLoginSuccess();
    await expect(loginPage.errorMessage).toBeVisible;
 });