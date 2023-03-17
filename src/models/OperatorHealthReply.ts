/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServerHealth } from './ServerHealth';

export type OperatorHealthReply = {
    FailureTolerance?: number;
    Healthy?: boolean;
    Servers?: Array<ServerHealth>;
};

