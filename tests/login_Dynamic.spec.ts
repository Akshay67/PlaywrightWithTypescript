import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginDynamic.json';
import { ERROR_MESSAGE } from '../constants/errorMessages';

loginData.forEach((data) => { // Loop through all users 
    if (!data.run) return; // skip the test if run is false
    test(`Login Test for ${data.username}`, async ({ page }) => { // Dynamic test case creation based on username
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(data.username, data.password);

        if (data.expected === 'success') {
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        } else {
            await expect(loginPage.errorMessage).toHaveText(ERROR_MESSAGE.LOCKED_USER); // Verify the error message for locked user
        }

    });
});
