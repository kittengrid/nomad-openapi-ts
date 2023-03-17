/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Job } from './Job';

export type JobValidateRequest = {
    Job?: Job;
    Namespace?: string;
    Region?: string;
    SecretID?: string;
};

