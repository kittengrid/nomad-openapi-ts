/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeReservedCpuResources } from './NodeReservedCpuResources';
import type { NodeReservedDiskResources } from './NodeReservedDiskResources';
import type { NodeReservedMemoryResources } from './NodeReservedMemoryResources';
import type { NodeReservedNetworkResources } from './NodeReservedNetworkResources';

export type NodeReservedResources = {
    Cpu?: NodeReservedCpuResources;
    Disk?: NodeReservedDiskResources;
    Memory?: NodeReservedMemoryResources;
    Networks?: NodeReservedNetworkResources;
};

