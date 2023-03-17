/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Affinity } from './Affinity';
import type { Constraint } from './Constraint';

export type RequestedDevice = {
    Affinities?: Array<Affinity>;
    Constraints?: Array<Constraint>;
    Count?: number;
    Name?: string;
};

