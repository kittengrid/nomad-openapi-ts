/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocatedResources } from './AllocatedResources';
import type { AllocDeploymentStatus } from './AllocDeploymentStatus';
import type { RescheduleTracker } from './RescheduleTracker';
import type { TaskState } from './TaskState';

export type AllocationListStub = {
    AllocatedResources?: AllocatedResources;
    ClientDescription?: string;
    ClientStatus?: string;
    CreateIndex?: number;
    CreateTime?: number;
    DeploymentStatus?: AllocDeploymentStatus;
    DesiredDescription?: string;
    DesiredStatus?: string;
    EvalID?: string;
    FollowupEvalID?: string;
    ID?: string;
    JobID?: string;
    JobType?: string;
    JobVersion?: number;
    ModifyIndex?: number;
    ModifyTime?: number;
    Name?: string;
    Namespace?: string;
    NodeID?: string;
    NodeName?: string;
    PreemptedAllocations?: Array<string>;
    PreemptedByAllocation?: string;
    RescheduleTracker?: RescheduleTracker;
    TaskGroup?: string;
    TaskStates?: Record<string, TaskState>;
};

