/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsulMeshGateway } from './ConsulMeshGateway';

export type ConsulUpstream = {
    Datacenter?: string;
    DestinationName?: string;
    DestinationNamespace?: string;
    LocalBindAddress?: string;
    LocalBindPort?: number;
    MeshGateway?: ConsulMeshGateway;
};

