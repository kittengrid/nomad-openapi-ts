/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Variable } from '../models/Variable';
import type { VariableMetadata } from '../models/VariableMetadata';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VariablesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param path A path to a Nomad Variable
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param cas A compare-and-set parameter for Nomad Variables
     * @returns string
     * @throws ApiError
     */
    public deleteVariable(
        path: string,
        requestBody: Variable,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
        cas?: number,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/var/{path}',
            path: {
                'path': path,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
                'cas': cas,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'X-Nomad-Index',
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                405: `Method not allowed`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param path A path to a Nomad Variable
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns Variable
     * @throws ApiError
     */
    public getVariableQuery(
        path: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Variable> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/var/{path}',
            path: {
                'path': path,
            },
            headers: {
                'index': index,
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'wait': wait,
                'stale': stale,
                'prefix': prefix,
                'per_page': perPage,
                'next_token': nextToken,
            },
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                405: `Method not allowed`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param path A path to a Nomad Variable
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param cas A compare-and-set parameter for Nomad Variables
     * @returns Variable
     * @throws ApiError
     */
    public postVariable(
        path: string,
        requestBody: Variable,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
        cas?: number,
    ): CancelablePromise<Variable> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/var/{path}',
            path: {
                'path': path,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
                'cas': cas,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                405: `Method not allowed`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param path A path to a Nomad Variable
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param cas A compare-and-set parameter for Nomad Variables
     * @returns Variable
     * @throws ApiError
     */
    public putVariable(
        path: string,
        requestBody: Variable,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
        cas?: number,
    ): CancelablePromise<Variable> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/var/{path}',
            path: {
                'path': path,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
                'cas': cas,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
                403: `Forbidden`,
                405: `Method not allowed`,
                500: `Internal server error`,
            },
        });
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns VariableMetadata
     * @throws ApiError
     */
    public getVariablesListRequest(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Array<VariableMetadata>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/vars',
            headers: {
                'index': index,
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'wait': wait,
                'stale': stale,
                'prefix': prefix,
                'per_page': perPage,
                'next_token': nextToken,
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
