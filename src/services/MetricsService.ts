/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MetricsSummary } from '../models/MetricsSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MetricsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param format The format the user requested for the metrics summary (e.g. prometheus)
     * @returns MetricsSummary
     * @throws ApiError
     */
    public getMetricsSummary(
        format?: string,
    ): CancelablePromise<MetricsSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/metrics',
            query: {
                'format': format,
            },
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                405: `Method not allowed`,
                500: `Internal server error`,
            },
        });
    }

}
