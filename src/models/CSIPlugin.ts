/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocationListStub } from './AllocationListStub';
import type { CSIInfo } from './CSIInfo';

export type CSIPlugin = {
    Allocations?: Array<AllocationListStub>;
    ControllerRequired?: boolean;
    Controllers?: Record<string, CSIInfo>;
    ControllersExpected?: number;
    ControllersHealthy?: number;
    CreateIndex?: number;
    ID?: string;
    ModifyIndex?: number;
    Nodes?: Record<string, CSIInfo>;
    NodesExpected?: number;
    NodesHealthy?: number;
    Provider?: string;
    Version?: string;
};

