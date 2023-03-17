/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskGroupScaleStatus } from './TaskGroupScaleStatus';

export type JobScaleStatusResponse = {
    JobCreateIndex?: number;
    JobID?: string;
    JobModifyIndex?: number;
    JobStopped?: boolean;
    Namespace?: string;
    TaskGroups?: Record<string, TaskGroupScaleStatus>;
};

