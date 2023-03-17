/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ACLPolicy } from '../models/ACLPolicy';
import type { ACLPolicyListStub } from '../models/ACLPolicyListStub';
import type { ACLToken } from '../models/ACLToken';
import type { ACLTokenListStub } from '../models/ACLTokenListStub';
import type { OneTimeToken } from '../models/OneTimeToken';
import type { OneTimeTokenExchangeRequest } from '../models/OneTimeTokenExchangeRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AclService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns ACLToken
     * @throws ApiError
     */
    public postAclBootstrap(
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<ACLToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/acl/bootstrap',
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
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns ACLPolicyListStub
     * @throws ApiError
     */
    public getAclPolicies(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Array<ACLPolicyListStub>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/acl/policies',
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
     * @param policyName The ACL policy name.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns string
     * @throws ApiError
     */
    public deleteAclPolicy(
        policyName: string,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/acl/policy/{policyName}',
            path: {
                'policyName': policyName,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
            },
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
     * @param policyName The ACL policy name.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns ACLPolicy
     * @throws ApiError
     */
    public getAclPolicy(
        policyName: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<ACLPolicy> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/acl/policy/{policyName}',
            path: {
                'policyName': policyName,
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
     * @param policyName The ACL policy name.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns string
     * @throws ApiError
     */
    public postAclPolicy(
        policyName: string,
        requestBody: ACLPolicy,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/acl/policy/{policyName}',
            path: {
                'policyName': policyName,
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
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns ACLToken
     * @throws ApiError
     */
    public getAclTokenSelf(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<ACLToken> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/acl/token',
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
     * @param tokenAccessor The token accessor ID.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns string
     * @throws ApiError
     */
    public deleteAclToken(
        tokenAccessor: string,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/acl/token/{tokenAccessor}',
            path: {
                'tokenAccessor': tokenAccessor,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
            },
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
     * @param tokenAccessor The token accessor ID.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns ACLToken
     * @throws ApiError
     */
    public getAclToken(
        tokenAccessor: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<ACLToken> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/acl/token/{tokenAccessor}',
            path: {
                'tokenAccessor': tokenAccessor,
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
     * @param tokenAccessor The token accessor ID.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns ACLToken
     * @throws ApiError
     */
    public postAclToken(
        tokenAccessor: string,
        requestBody: ACLToken,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<ACLToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/acl/token/{tokenAccessor}',
            path: {
                'tokenAccessor': tokenAccessor,
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
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns OneTimeToken
     * @throws ApiError
     */
    public postAclTokenOnetime(
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<OneTimeToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/acl/token/onetime',
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
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns ACLToken
     * @throws ApiError
     */
    public postAclTokenOnetimeExchange(
        requestBody: OneTimeTokenExchangeRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<ACLToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/acl/token/onetime/exchange',
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
     * @returns ACLTokenListStub
     * @throws ApiError
     */
    public getAclTokens(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<Array<ACLTokenListStub>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/acl/tokens',
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
