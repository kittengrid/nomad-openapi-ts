/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSIInfo } from './CSIInfo';
import type { DrainMetadata } from './DrainMetadata';
import type { DrainStrategy } from './DrainStrategy';
import type { DriverInfo } from './DriverInfo';
import type { HostNetworkInfo } from './HostNetworkInfo';
import type { HostVolumeInfo } from './HostVolumeInfo';
import type { NodeEvent } from './NodeEvent';
import type { NodeReservedResources } from './NodeReservedResources';
import type { NodeResources } from './NodeResources';
import type { Resources } from './Resources';

export type Node = {
    Attributes?: Record<string, string>;
    CSIControllerPlugins?: Record<string, CSIInfo>;
    CSINodePlugins?: Record<string, CSIInfo>;
    CgroupParent?: string;
    CreateIndex?: number;
    Datacenter?: string;
    Drain?: boolean;
    DrainStrategy?: DrainStrategy;
    Drivers?: Record<string, DriverInfo>;
    Events?: Array<NodeEvent>;
    HTTPAddr?: string;
    HostNetworks?: Record<string, HostNetworkInfo>;
    HostVolumes?: Record<string, HostVolumeInfo>;
    ID?: string;
    LastDrain?: DrainMetadata;
    Links?: Record<string, string>;
    Meta?: Record<string, string>;
    ModifyIndex?: number;
    Name?: string;
    NodeClass?: string;
    NodeResources?: NodeResources;
    Reserved?: Resources;
    ReservedResources?: NodeReservedResources;
    Resources?: Resources;
    SchedulingEligibility?: string;
    Status?: string;
    StatusDescription?: string;
    StatusUpdatedAt?: number;
    TLSEnabled?: boolean;
};

