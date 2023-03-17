/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Allocation } from './Allocation';
import type { AllocationListStub } from './AllocationListStub';
import type { CSIMountOptions } from './CSIMountOptions';
import type { CSISecrets } from './CSISecrets';
import type { CSITopology } from './CSITopology';
import type { CSITopologyRequest } from './CSITopologyRequest';
import type { CSIVolumeCapability } from './CSIVolumeCapability';

export type CSIVolume = {
    AccessMode?: string;
    Allocations?: Array<AllocationListStub>;
    AttachmentMode?: string;
    Capacity?: number;
    CloneID?: string;
    Context?: Record<string, string>;
    ControllerRequired?: boolean;
    ControllersExpected?: number;
    ControllersHealthy?: number;
    CreateIndex?: number;
    ExternalID?: string;
    ID?: string;
    ModifyIndex?: number;
    MountOptions?: CSIMountOptions;
    Name?: string;
    Namespace?: string;
    NodesExpected?: number;
    NodesHealthy?: number;
    Parameters?: Record<string, string>;
    PluginID?: string;
    Provider?: string;
    ProviderVersion?: string;
    ReadAllocs?: Record<string, Allocation>;
    RequestedCapabilities?: Array<CSIVolumeCapability>;
    RequestedCapacityMax?: number;
    RequestedCapacityMin?: number;
    RequestedTopologies?: CSITopologyRequest;
    ResourceExhausted?: string;
    Schedulable?: boolean;
    Secrets?: CSISecrets;
    SnapshotID?: string;
    Topologies?: Array<CSITopology>;
    WriteAllocs?: Record<string, Allocation>;
};

