/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSITopology } from './CSITopology';

export type CSITopologyRequest = {
    Preferred?: Array<CSITopology>;
    Required?: Array<CSITopology>;
};

