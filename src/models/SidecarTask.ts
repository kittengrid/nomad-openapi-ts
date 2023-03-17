/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LogConfig } from './LogConfig';
import type { Resources } from './Resources';

export type SidecarTask = {
    Config?: Record<string, any>;
    Driver?: string;
    Env?: Record<string, string>;
    KillSignal?: string;
    KillTimeout?: number;
    LogConfig?: LogConfig;
    Meta?: Record<string, string>;
    Name?: string;
    Resources?: Resources;
    ShutdownDelay?: number;
    User?: string;
};

