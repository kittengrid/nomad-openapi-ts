/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllocationListStub } from '../models/AllocationListStub';
import type { Deployment } from '../models/Deployment';
import type { Evaluation } from '../models/Evaluation';
import type { Job } from '../models/Job';
import type { JobDeregisterResponse } from '../models/JobDeregisterResponse';
import type { JobDispatchRequest } from '../models/JobDispatchRequest';
import type { JobDispatchResponse } from '../models/JobDispatchResponse';
import type { JobEvaluateRequest } from '../models/JobEvaluateRequest';
import type { JobListStub } from '../models/JobListStub';
import type { JobPlanRequest } from '../models/JobPlanRequest';
import type { JobPlanResponse } from '../models/JobPlanResponse';
import type { JobRegisterRequest } from '../models/JobRegisterRequest';
import type { JobRegisterResponse } from '../models/JobRegisterResponse';
import type { JobRevertRequest } from '../models/JobRevertRequest';
import type { JobScaleStatusResponse } from '../models/JobScaleStatusResponse';
import type { JobsParseRequest } from '../models/JobsParseRequest';
import type { JobStabilityRequest } from '../models/JobStabilityRequest';
import type { JobStabilityResponse } from '../models/JobStabilityResponse';
import type { JobSummary } from '../models/JobSummary';
import type { JobValidateRequest } from '../models/JobValidateRequest';
import type { JobValidateResponse } from '../models/JobValidateResponse';
import type { JobVersionsResponse } from '../models/JobVersionsResponse';
import type { PeriodicForceResponse } from '../models/PeriodicForceResponse';
import type { ScalingRequest } from '../models/ScalingRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class JobsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param purge Boolean flag indicating whether to purge allocations of the job after deleting.
     * @param global Boolean flag indicating whether the operation should apply to all instances of the job globally.
     * @returns JobDeregisterResponse
     * @throws ApiError
     */
    public deleteJob(
        jobName: string,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
        purge?: boolean,
        global?: boolean,
    ): CancelablePromise<JobDeregisterResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/job/{jobName}',
            path: {
                'jobName': jobName,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
                'purge': purge,
                'global': global,
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
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns Job
     * @throws ApiError
     */
    public getJob(
        jobName: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Job> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/job/{jobName}',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobRegisterResponse
     * @throws ApiError
     */
    public postJob(
        jobName: string,
        requestBody: JobRegisterRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobRegisterResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/job/{jobName}',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param all Specifies whether the list of allocations should include allocations from a previously registered job with the same ID. This is possible if the job is deregistered and reregistered.
     * @returns AllocationListStub
     * @throws ApiError
     */
    public getJobAllocations(
        jobName: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
        all?: boolean,
    ): CancelablePromise<Array<AllocationListStub>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/job/{jobName}/allocations',
            path: {
                'jobName': jobName,
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
                'all': all,
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
     * @param jobName The job identifier.
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
    public getJobDeployment(
        jobName: string,
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
            url: '/job/{jobName}/deployment',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param all Flag indicating whether to constrain by job creation index or not.
     * @returns Deployment
     * @throws ApiError
     */
    public getJobDeployments(
        jobName: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
        all?: number,
    ): CancelablePromise<Array<Deployment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/job/{jobName}/deployments',
            path: {
                'jobName': jobName,
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
                'all': all,
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
     * @param jobName The job identifier.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobDispatchResponse
     * @throws ApiError
     */
    public postJobDispatch(
        jobName: string,
        requestBody: JobDispatchRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobDispatchResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/job/{jobName}/dispatch',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobRegisterResponse
     * @throws ApiError
     */
    public postJobEvaluate(
        jobName: string,
        requestBody: JobEvaluateRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobRegisterResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/job/{jobName}/evaluate',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns Evaluation
     * @throws ApiError
     */
    public getJobEvaluations(
        jobName: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Array<Evaluation>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/job/{jobName}/evaluations',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns PeriodicForceResponse
     * @throws ApiError
     */
    public postJobPeriodicForce(
        jobName: string,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<PeriodicForceResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/job/{jobName}/periodic/force',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobPlanResponse
     * @throws ApiError
     */
    public postJobPlan(
        jobName: string,
        requestBody: JobPlanRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobPlanResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/job/{jobName}/plan',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobRegisterResponse
     * @throws ApiError
     */
    public postJobRevert(
        jobName: string,
        requestBody: JobRevertRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobRegisterResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/job/{jobName}/revert',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns JobScaleStatusResponse
     * @throws ApiError
     */
    public getJobScaleStatus(
        jobName: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<JobScaleStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/job/{jobName}/scale',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobRegisterResponse
     * @throws ApiError
     */
    public postJobScalingRequest(
        jobName: string,
        requestBody: ScalingRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobRegisterResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/job/{jobName}/scale',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobStabilityResponse
     * @throws ApiError
     */
    public postJobStability(
        jobName: string,
        requestBody: JobStabilityRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobStabilityResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/job/{jobName}/stable',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns JobSummary
     * @throws ApiError
     */
    public getJobSummary(
        jobName: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<JobSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/job/{jobName}/summary',
            path: {
                'jobName': jobName,
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
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param diffs Boolean flag indicating whether to compute job diffs.
     * @returns JobVersionsResponse
     * @throws ApiError
     */
    public getJobVersions(
        jobName: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
        diffs?: boolean,
    ): CancelablePromise<JobVersionsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/job/{jobName}/versions',
            path: {
                'jobName': jobName,
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
                'diffs': diffs,
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
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns JobListStub
     * @throws ApiError
     */
    public getJobs(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Array<JobListStub>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/jobs',
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
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobRegisterResponse
     * @throws ApiError
     */
    public registerJob(
        requestBody: JobRegisterRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobRegisterResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/jobs',
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
     * @param requestBody
     * @returns Job
     * @throws ApiError
     */
    public postJobParse(
        requestBody: JobsParseRequest,
    ): CancelablePromise<Job> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/jobs/parse',
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
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns JobValidateResponse
     * @throws ApiError
     */
    public postJobValidateRequest(
        requestBody: JobValidateRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<JobValidateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/validate/job',
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

}
