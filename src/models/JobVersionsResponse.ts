/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Job } from './Job';
import type { JobDiff } from './JobDiff';

export type JobVersionsResponse = {
    Diffs?: Array<JobDiff>;
    KnownLeader?: boolean;
    LastContact?: number;
    LastIndex?: number;
    NextToken?: string;
    RequestTime?: number;
    Versions?: Array<Job>;
};

