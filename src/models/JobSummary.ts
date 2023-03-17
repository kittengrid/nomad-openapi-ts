/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobChildrenSummary } from './JobChildrenSummary';
import type { TaskGroupSummary } from './TaskGroupSummary';

export type JobSummary = {
    Children?: JobChildrenSummary;
    CreateIndex?: number;
    JobID?: string;
    ModifyIndex?: number;
    Namespace?: string;
    Summary?: Record<string, TaskGroupSummary>;
};

