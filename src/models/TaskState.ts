/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskEvent } from './TaskEvent';
import type { TaskHandle } from './TaskHandle';

export type TaskState = {
    Events?: Array<TaskEvent>;
    Failed?: boolean;
    FinishedAt?: string;
    LastRestart?: string;
    Restarts?: number;
    StartedAt?: string;
    State?: string;
    TaskHandle?: TaskHandle;
};

