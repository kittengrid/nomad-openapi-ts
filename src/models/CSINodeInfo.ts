/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSITopology } from './CSITopology';

export type CSINodeInfo = {
    AccessibleTopology?: CSITopology;
    ID?: string;
    MaxVolumes?: number;
    RequiresNodeStageVolume?: boolean;
    SupportsCondition?: boolean;
    SupportsExpand?: boolean;
    SupportsStats?: boolean;
};

