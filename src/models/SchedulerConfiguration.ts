/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PreemptionConfig } from './PreemptionConfig';

export type SchedulerConfiguration = {
    CreateIndex?: number;
    MemoryOversubscriptionEnabled?: boolean;
    ModifyIndex?: number;
    PauseEvalBroker?: boolean;
    PreemptionConfig?: PreemptionConfig;
    RejectJobRegistration?: boolean;
    SchedulerAlgorithm?: string;
};

