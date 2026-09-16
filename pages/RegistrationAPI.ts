import { APIRequestContext, APIResponse } from '@playwright/test';

export class RegistrationAPI {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {

        this.request = request;

    }

    async registerUser(userData: object): Promise<APIResponse> {
        return await this.request.post('https://sc-cloud-dev.innov8hrm.com/api/v1/auth/register', {

            data: userData
        });

    }
}