/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SchedulerConfiguration } from './SchedulerConfiguration';

export type SchedulerConfigurationResponse = {
    KnownLeader?: boolean;
    LastContact?: number;
    LastIndex?: number;
    NextToken?: string;
    RequestTime?: number;
    SchedulerConfig?: SchedulerConfiguration;
};

