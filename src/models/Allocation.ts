/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocatedResources } from './AllocatedResources';
import type { AllocationMetric } from './AllocationMetric';
import type { AllocDeploymentStatus } from './AllocDeploymentStatus';
import type { DesiredTransition } from './DesiredTransition';
import type { Job } from './Job';
import type { RescheduleTracker } from './RescheduleTracker';
import type { Resources } from './Resources';
import type { TaskState } from './TaskState';

export type Allocation = {
    AllocModifyIndex?: number;
    AllocatedResources?: AllocatedResources;
    ClientDescription?: string;
    ClientStatus?: string;
    CreateIndex?: number;
    CreateTime?: number;
    DeploymentID?: string;
    DeploymentStatus?: AllocDeploymentStatus;
    DesiredDescription?: string;
    DesiredStatus?: string;
    DesiredTransition?: DesiredTransition;
    EvalID?: string;
    FollowupEvalID?: string;
    ID?: string;
    Job?: Job;
    JobID?: string;
    Metrics?: AllocationMetric;
    ModifyIndex?: number;
    ModifyTime?: number;
    Name?: string;
    Namespace?: string;
    NextAllocation?: string;
    NodeID?: string;
    NodeName?: string;
    PreemptedAllocations?: Array<string>;
    PreemptedByAllocation?: string;
    PreviousAllocation?: string;
    RescheduleTracker?: RescheduleTracker;
    Resources?: Resources;
    Services?: Record<string, string>;
    TaskGroup?: string;
    TaskResources?: Record<string, Resources>;
    TaskStates?: Record<string, TaskState>;
};

