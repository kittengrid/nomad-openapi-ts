/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeploymentState } from './DeploymentState';

export type Deployment = {
    CreateIndex?: number;
    ID?: string;
    IsMultiregion?: boolean;
    JobCreateIndex?: number;
    JobID?: string;
    JobModifyIndex?: number;
    JobSpecModifyIndex?: number;
    JobVersion?: number;
    ModifyIndex?: number;
    Namespace?: string;
    Status?: string;
    StatusDescription?: string;
    TaskGroups?: Record<string, DeploymentState>;
};

