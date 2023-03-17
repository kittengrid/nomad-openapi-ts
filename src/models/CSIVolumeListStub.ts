/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSITopology } from './CSITopology';

export type CSIVolumeListStub = {
    AccessMode?: string;
    AttachmentMode?: string;
    ControllerRequired?: boolean;
    ControllersExpected?: number;
    ControllersHealthy?: number;
    CreateIndex?: number;
    CurrentReaders?: number;
    CurrentWriters?: number;
    ExternalID?: string;
    ID?: string;
    ModifyIndex?: number;
    Name?: string;
    Namespace?: string;
    NodesExpected?: number;
    NodesHealthy?: number;
    PluginID?: string;
    Provider?: string;
    ResourceExhausted?: string;
    Schedulable?: boolean;
    Topologies?: Array<CSITopology>;
};

