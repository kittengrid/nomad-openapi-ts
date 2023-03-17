/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocationListStub } from './AllocationListStub';
import type { DesiredUpdates } from './DesiredUpdates';

export type PlanAnnotations = {
    DesiredTGUpdates?: Record<string, DesiredUpdates>;
    PreemptedAllocs?: Array<AllocationListStub>;
};

