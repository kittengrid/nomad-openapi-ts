/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeDeviceLocality } from './NodeDeviceLocality';

export type NodeDevice = {
    HealthDescription?: string;
    Healthy?: boolean;
    ID?: string;
    Locality?: NodeDeviceLocality;
};

