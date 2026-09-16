import { test, expect } from "@playwright/test";
import { adminLoginPageAPI } from "../pages/adminLoginPageAPI";
import { adminLoginData } from "../utils/testData";

test.describe('System Admin login', () => {

    test('TC_002 - validate Admin login API', async ({ request }) => {
       
        const adminLoginAPI = new adminLoginPageAPI(request);
        const response = await adminLoginAPI.loginAdmin(adminLoginData);
        const responseBody = await response.text();
        console.log('Status code :', response.status());
        console.log('Response URL :', response.url());
        console.log('Response Body :', responseBody);

        expect(response.status()).toBe(200);
    });
})
