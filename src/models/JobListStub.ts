/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobSummary } from './JobSummary';

export type JobListStub = {
    CreateIndex?: number;
    Datacenters?: Array<string>;
    ID?: string;
    JobModifyIndex?: number;
    JobSummary?: JobSummary;
    ModifyIndex?: number;
    Name?: string;
    Namespace?: string;
    ParameterizedJob?: boolean;
    ParentID?: string;
    Periodic?: boolean;
    Priority?: number;
    Status?: string;
    StatusDescription?: string;
    Stop?: boolean;
    SubmitTime?: number;
    Type?: string;
};

