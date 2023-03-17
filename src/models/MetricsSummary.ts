/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GaugeValue } from './GaugeValue';
import type { PointValue } from './PointValue';
import type { SampledValue } from './SampledValue';

export type MetricsSummary = {
    Counters?: Array<SampledValue>;
    Gauges?: Array<GaugeValue>;
    Points?: Array<PointValue>;
    Samples?: Array<SampledValue>;
    Timestamp?: string;
};

