/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultiregionRegion } from './MultiregionRegion';
import type { MultiregionStrategy } from './MultiregionStrategy';

export type Multiregion = {
    Regions?: Array<MultiregionRegion>;
    Strategy?: MultiregionStrategy;
};

