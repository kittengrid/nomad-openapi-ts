/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSISnapshot } from './CSISnapshot';

export type CSISnapshotCreateResponse = {
    KnownLeader?: boolean;
    LastContact?: number;
    LastIndex?: number;
    NextToken?: string;
    RequestTime?: number;
    Snapshots?: Array<CSISnapshot>;
};

