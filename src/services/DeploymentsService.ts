/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllocationListStub } from '../models/AllocationListStub';
import type { Deployment } from '../models/Deployment';
import type { DeploymentAllocHealthRequest } from '../models/DeploymentAllocHealthRequest';
import type { DeploymentPauseRequest } from '../models/DeploymentPauseRequest';
import type { DeploymentPromoteRequest } from '../models/DeploymentPromoteRequest';
import type { DeploymentUnblockRequest } from '../models/DeploymentUnblockRequest';
import type { DeploymentUpdateResponse } from '../models/DeploymentUpdateResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DeploymentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param deploymentId Deployment ID.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns Deployment
     * @throws ApiError
     */
    public getDeployment(
        deploymentId: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Deployment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deployment/{deploymentID}',
            path: {
                'deploymentID': deploymentId,
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
     * @param deploymentId Deployment ID.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns DeploymentUpdateResponse
     * @throws ApiError
     */
    public postDeploymentAllocationHealth(
        deploymentId: string,
        requestBody: DeploymentAllocHealthRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<DeploymentUpdateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deployment/allocation-health/{deploymentID}',
            path: {
                'deploymentID': deploymentId,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
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
     * @param deploymentId Deployment ID.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns AllocationListStub
     * @throws ApiError
     */
    public getDeploymentAllocations(
        deploymentId: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Array<AllocationListStub>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deployment/allocations/{deploymentID}',
            path: {
                'deploymentID': deploymentId,
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
     * @param deploymentId Deployment ID.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns DeploymentUpdateResponse
     * @throws ApiError
     */
    public postDeploymentFail(
        deploymentId: string,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<DeploymentUpdateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deployment/fail/{deploymentID}',
            path: {
                'deploymentID': deploymentId,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
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
     * @param deploymentId Deployment ID.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns DeploymentUpdateResponse
     * @throws ApiError
     */
    public postDeploymentPause(
        deploymentId: string,
        requestBody: DeploymentPauseRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<DeploymentUpdateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deployment/pause/{deploymentID}',
            path: {
                'deploymentID': deploymentId,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
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
     * @param deploymentId Deployment ID.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns DeploymentUpdateResponse
     * @throws ApiError
     */
    public postDeploymentPromote(
        deploymentId: string,
        requestBody: DeploymentPromoteRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<DeploymentUpdateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deployment/promote/{deploymentID}',
            path: {
                'deploymentID': deploymentId,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
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
     * @param deploymentId Deployment ID.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns DeploymentUpdateResponse
     * @throws ApiError
     */
    public postDeploymentUnblock(
        deploymentId: string,
        requestBody: DeploymentUnblockRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<DeploymentUpdateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deployment/unblock/{deploymentID}',
            path: {
                'deploymentID': deploymentId,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
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
     * @returns Deployment
     * @throws ApiError
     */
    public getDeployments(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Array<Deployment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deployments',
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
