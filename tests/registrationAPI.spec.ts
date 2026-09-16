import { test, expect } from '@playwright/test';
import { RegistrationAPI } from '../pages/RegistrationAPI';
import { registrationData } from '../utils/testData';

test.describe('Registration API Tests', () => {

    // TC_001: Verify that a new user can be registered successfully
    test('TC_001 - Register a new user successfully', async ({ request }) => {

        // Create an instance of the Registration API class
        const registrationAPI = new RegistrationAPI(request);

        // Send the registration request with the test data
        const response = await registrationAPI.registerUser(registrationData);

        // Get the API response body for debugging
        const responseBody = await response.text();

        // Log response details for debugging and verification
        console.log('Status Code:', response.status());
        console.log('Response URL:', response.url());
        console.log('Response Body:', responseBody);

        // Verify that the registration API returns HTTP 201 Created
        expect(response.status()).toBe(201);

    });

});