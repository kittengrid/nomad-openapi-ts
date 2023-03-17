/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocatedSharedResources } from './AllocatedSharedResources';
import type { AllocatedTaskResources } from './AllocatedTaskResources';

export type AllocatedResources = {
    Shared?: AllocatedSharedResources;
    Tasks?: Record<string, AllocatedTaskResources>;
};

