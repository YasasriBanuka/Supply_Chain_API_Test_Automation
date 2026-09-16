import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
console.log('BASE_URL:', process.env.BASE_URL);

export default defineConfig({
    testDir: './tests',

    use: {
        baseURL: process.env.BASE_URL,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ]
});