import { test, expect } from '@playwright/test';
import { RegistrationAPI } from '../pages/RegistrationAPI';
import { registrationData } from '../utils/testData';

test.describe('Registration API Tests', () => {

    test('TC_001 - Register a new user successfully', async ({ request }) => {

        const registrationAPI = new RegistrationAPI(request);

        const response = await registrationAPI.registerUser(registrationData);

        const responseBody = await response.text();

        console.log('Status Code:', response.status());
        console.log('Response URL:', response.url());
        console.log('Response Body:', responseBody);

        expect(response.status()).toBe(201);
    });

});