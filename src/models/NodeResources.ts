/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NetworkResource } from './NetworkResource';
import type { NodeCpuResources } from './NodeCpuResources';
import type { NodeDeviceResource } from './NodeDeviceResource';
import type { NodeDiskResources } from './NodeDiskResources';
import type { NodeMemoryResources } from './NodeMemoryResources';

export type NodeResources = {
    Cpu?: NodeCpuResources;
    Devices?: Array<NodeDeviceResource>;
    Disk?: NodeDiskResources;
    MaxDynamicPort?: number;
    Memory?: NodeMemoryResources;
    MinDynamicPort?: number;
    Networks?: Array<NetworkResource>;
};

