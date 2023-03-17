/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NetworkResource } from './NetworkResource';
import type { PortMapping } from './PortMapping';

export type AllocatedSharedResources = {
    DiskMB?: number;
    Networks?: Array<NetworkResource>;
    Ports?: Array<PortMapping>;
};

