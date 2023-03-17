/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSIMountOptions } from './CSIMountOptions';

export type VolumeRequest = {
    AccessMode?: string;
    AttachmentMode?: string;
    MountOptions?: CSIMountOptions;
    Name?: string;
    PerAlloc?: boolean;
    ReadOnly?: boolean;
    Source?: string;
    Type?: string;
};

