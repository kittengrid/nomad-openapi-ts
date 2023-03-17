/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Job } from './Job';

export type JobPlanRequest = {
    Diff?: boolean;
    Job?: Job;
    Namespace?: string;
    PolicyOverride?: boolean;
    Region?: string;
    SecretID?: string;
};

