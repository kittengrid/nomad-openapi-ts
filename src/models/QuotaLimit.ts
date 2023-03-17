/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Resources } from './Resources';

export type QuotaLimit = {
    Hash?: string;
    Region?: string;
    RegionLimit?: Resources;
    VariablesLimit?: number;
};

