/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Job } from './Job';

export type JobRegisterRequest = {
    EnforceIndex?: boolean;
    EvalPriority?: number;
    Job?: Job;
    JobModifyIndex?: number;
    Namespace?: string;
    PolicyOverride?: boolean;
    PreserveCounts?: boolean;
    Region?: string;
    SecretID?: string;
};

