/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EvalOptions } from './EvalOptions';

export type JobEvaluateRequest = {
    EvalOptions?: EvalOptions;
    JobID?: string;
    Namespace?: string;
    Region?: string;
    SecretID?: string;
};

