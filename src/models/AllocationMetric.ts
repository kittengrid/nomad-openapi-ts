/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeScoreMeta } from './NodeScoreMeta';
import type { Resources } from './Resources';

export type AllocationMetric = {
    AllocationTime?: number;
    ClassExhausted?: Record<string, number>;
    ClassFiltered?: Record<string, number>;
    CoalescedFailures?: number;
    ConstraintFiltered?: Record<string, number>;
    DimensionExhausted?: Record<string, number>;
    NodesAvailable?: Record<string, number>;
    NodesEvaluated?: number;
    NodesExhausted?: number;
    NodesFiltered?: number;
    QuotaExhausted?: Array<string>;
    ResourcesExhausted?: Record<string, Resources>;
    ScoreMetaData?: Array<NodeScoreMeta>;
    Scores?: Record<string, number>;
};

