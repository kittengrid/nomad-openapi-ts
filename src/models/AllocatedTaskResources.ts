/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocatedCpuResources } from './AllocatedCpuResources';
import type { AllocatedDeviceResource } from './AllocatedDeviceResource';
import type { AllocatedMemoryResources } from './AllocatedMemoryResources';
import type { NetworkResource } from './NetworkResource';

export type AllocatedTaskResources = {
    Cpu?: AllocatedCpuResources;
    Devices?: Array<AllocatedDeviceResource>;
    Memory?: AllocatedMemoryResources;
    Networks?: Array<NetworkResource>;
};

