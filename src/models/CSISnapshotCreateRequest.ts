/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSISnapshot } from './CSISnapshot';

export type CSISnapshotCreateRequest = {
    Namespace?: string;
    Region?: string;
    SecretID?: string;
    Snapshots?: Array<CSISnapshot>;
};

