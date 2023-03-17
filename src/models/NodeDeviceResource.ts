/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attribute } from './Attribute';
import type { NodeDevice } from './NodeDevice';

export type NodeDeviceResource = {
    Attributes?: Record<string, Attribute>;
    Instances?: Array<NodeDevice>;
    Name?: string;
    Type?: string;
    Vendor?: string;
};

