/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateStrategy = {
    AutoPromote?: boolean;
    AutoRevert?: boolean;
    Canary?: number;
    HealthCheck?: string;
    HealthyDeadline?: number;
    MaxParallel?: number;
    MinHealthyTime?: number;
    ProgressDeadline?: number;
    Stagger?: number;
};

