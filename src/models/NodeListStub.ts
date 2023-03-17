/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DrainMetadata } from './DrainMetadata';
import type { DriverInfo } from './DriverInfo';
import type { NodeReservedResources } from './NodeReservedResources';
import type { NodeResources } from './NodeResources';

export type NodeListStub = {
    Address?: string;
    Attributes?: Record<string, string>;
    CreateIndex?: number;
    Datacenter?: string;
    Drain?: boolean;
    Drivers?: Record<string, DriverInfo>;
    ID?: string;
    LastDrain?: DrainMetadata;
    ModifyIndex?: number;
    Name?: string;
    NodeClass?: string;
    NodeResources?: NodeResources;
    ReservedResources?: NodeReservedResources;
    SchedulingEligibility?: string;
    Status?: string;
    StatusDescription?: string;
    Version?: string;
};

