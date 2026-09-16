import { APIRequestContext, APIResponse } from "@playwright/test";


export class adminLoginPageAPI {

    private request: APIRequestContext;

    constructor(request: APIRequestContext) {

        this.request = request;
    }

    async loginAdmin(loginData: object): Promise<APIResponse> {

        return await this.request.post('https://sc-cloud-dev.innov8hrm.com/api/v1/auth/login', {

            data: loginData
        });
    }
}