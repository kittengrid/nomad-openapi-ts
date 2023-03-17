/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CSISnapshotCreateRequest } from '../models/CSISnapshotCreateRequest';
import type { CSISnapshotCreateResponse } from '../models/CSISnapshotCreateResponse';
import type { CSISnapshotListResponse } from '../models/CSISnapshotListResponse';
import type { CSIVolume } from '../models/CSIVolume';
import type { CSIVolumeCreateRequest } from '../models/CSIVolumeCreateRequest';
import type { CSIVolumeListExternalResponse } from '../models/CSIVolumeListExternalResponse';
import type { CSIVolumeListStub } from '../models/CSIVolumeListStub';
import type { CSIVolumeRegisterRequest } from '../models/CSIVolumeRegisterRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VolumesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param volumeId Volume unique identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param force Used to force the de-registration of a volume.
     * @returns string
     * @throws ApiError
     */
    public deleteVolumeRegistration(
        volumeId: string,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
        force?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/volume/csi/{volumeId}',
            path: {
                'volumeId': volumeId,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
                'force': force,
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
     * @param volumeId Volume unique identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @returns CSIVolume
     * @throws ApiError
     */
    public getVolume(
        volumeId: string,
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
    ): CancelablePromise<CSIVolume> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/volume/csi/{volumeId}',
            path: {
                'volumeId': volumeId,
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
     * @param volumeId Volume unique identifier.
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns string
     * @throws ApiError
     */
    public postVolumeRegistration(
        volumeId: string,
        requestBody: CSIVolumeRegisterRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/volume/csi/{volumeId}',
            path: {
                'volumeId': volumeId,
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
     * @param volumeId Volume unique identifier.
     * @param action The action to perform on the Volume (create, detach, delete).
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param node Specifies node to target volume operation for.
     * @returns string
     * @throws ApiError
     */
    public detachOrDeleteVolume(
        volumeId: string,
        action: string,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
        node?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/volume/csi/{volumeId}/{action}',
            path: {
                'volumeId': volumeId,
                'action': action,
            },
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
                'node': node,
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
     * @param volumeId Volume unique identifier.
     * @param action The action to perform on the Volume (create, detach, delete).
     * @param requestBody
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @returns string
     * @throws ApiError
     */
    public createVolume(
        volumeId: string,
        action: string,
        requestBody: CSIVolumeCreateRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/volume/csi/{volumeId}/{action}',
            path: {
                'volumeId': volumeId,
                'action': action,
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
     * @param nodeId Filters volume lists by node ID.
     * @param pluginId Filters volume lists by plugin ID.
     * @param type Filters volume lists to a specific type.
     * @returns CSIVolumeListStub
     * @throws ApiError
     */
    public getVolumes(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
        nodeId?: string,
        pluginId?: string,
        type?: string,
    ): CancelablePromise<Array<CSIVolumeListStub>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/volumes',
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
                'node_id': nodeId,
                'plugin_id': pluginId,
                'type': type,
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
     * @returns string
     * @throws ApiError
     */
    public postVolume(
        requestBody: CSIVolumeRegisterRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/volumes',
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
     * @param pluginId Filters volume lists by plugin ID.
     * @returns CSIVolumeListExternalResponse
     * @throws ApiError
     */
    public getExternalVolumes(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
        pluginId?: string,
    ): CancelablePromise<CSIVolumeListExternalResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/volumes/external',
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
                'plugin_id': pluginId,
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
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param pluginId Filters volume lists by plugin ID.
     * @param snapshotId The ID of the snapshot to target.
     * @returns string
     * @throws ApiError
     */
    public deleteSnapshot(
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
        pluginId?: string,
        snapshotId?: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/volumes/snapshot',
            headers: {
                'X-Nomad-Token': xNomadToken,
            },
            query: {
                'region': region,
                'namespace': namespace,
                'idempotency_token': idempotencyToken,
                'plugin_id': pluginId,
                'snapshot_id': snapshotId,
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
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param pluginId Filters volume lists by plugin ID.
     * @returns CSISnapshotListResponse
     * @throws ApiError
     */
    public getSnapshots(
        region?: string,
        namespace?: string,
        index?: number,
        wait?: string,
        stale?: string,
        prefix?: string,
        xNomadToken?: string,
        perPage?: number,
        nextToken?: string,
        pluginId?: string,
    ): CancelablePromise<CSISnapshotListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/volumes/snapshot',
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
                'plugin_id': pluginId,
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
     * @returns CSISnapshotCreateResponse
     * @throws ApiError
     */
    public postSnapshot(
        requestBody: CSISnapshotCreateRequest,
        region?: string,
        namespace?: string,
        xNomadToken?: string,
        idempotencyToken?: string,
    ): CancelablePromise<CSISnapshotCreateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/volumes/snapshot',
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
