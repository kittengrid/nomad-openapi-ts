/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FuzzyMatch } from './FuzzyMatch';

export type FuzzySearchResponse = {
    KnownLeader?: boolean;
    LastContact?: number;
    LastIndex?: number;
    Matches?: Record<string, Array<FuzzyMatch>>;
    NextToken?: string;
    RequestTime?: number;
    Truncations?: Record<string, boolean>;
};

