/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocationMetric } from './AllocationMetric';
import type { Evaluation } from './Evaluation';
import type { JobDiff } from './JobDiff';
import type { PlanAnnotations } from './PlanAnnotations';

export type JobPlanResponse = {
    Annotations?: PlanAnnotations;
    CreatedEvals?: Array<Evaluation>;
    Diff?: JobDiff;
    FailedTGAllocs?: Record<string, AllocationMetric>;
    JobModifyIndex?: number;
    NextPeriodicLaunch?: string;
    Warnings?: string;
};

