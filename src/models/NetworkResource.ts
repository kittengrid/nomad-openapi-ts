/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DNSConfig } from './DNSConfig';
import type { Port } from './Port';

export type NetworkResource = {
    CIDR?: string;
    DNS?: DNSConfig;
    Device?: string;
    DynamicPorts?: Array<Port>;
    Hostname?: string;
    IP?: string;
    MBits?: number;
    Mode?: string;
    ReservedPorts?: Array<Port>;
};

