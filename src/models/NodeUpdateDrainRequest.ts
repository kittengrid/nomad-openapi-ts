/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DrainSpec } from './DrainSpec';

export type NodeUpdateDrainRequest = {
    DrainSpec?: DrainSpec;
    MarkEligible?: boolean;
    Meta?: Record<string, string>;
    NodeID?: string;
};

