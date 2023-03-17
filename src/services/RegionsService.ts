/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RegionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns string
     * @throws ApiError
     */
    public getRegions(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/regions',
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                405: `Method not allowed`,
                500: `Internal server error`,
            },
        });
    }

}
