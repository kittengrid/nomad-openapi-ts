/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScalingEvent } from './ScalingEvent';

export type TaskGroupScaleStatus = {
    Desired?: number;
    Events?: Array<ScalingEvent>;
    Healthy?: number;
    Placed?: number;
    Running?: number;
    Unhealthy?: number;
};

