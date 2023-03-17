/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NetworkResource } from './NetworkResource';
import type { RequestedDevice } from './RequestedDevice';

export type Resources = {
    CPU?: number;
    Cores?: number;
    Devices?: Array<RequestedDevice>;
    DiskMB?: number;
    IOPS?: number;
    MemoryMB?: number;
    MemoryMaxMB?: number;
    Networks?: Array<NetworkResource>;
};

