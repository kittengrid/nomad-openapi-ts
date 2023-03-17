/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSIControllerInfo } from './CSIControllerInfo';
import type { CSINodeInfo } from './CSINodeInfo';

export type CSIInfo = {
    AllocID?: string;
    ControllerInfo?: CSIControllerInfo;
    HealthDescription?: string;
    Healthy?: boolean;
    NodeInfo?: CSINodeInfo;
    PluginID?: string;
    RequiresControllerPlugin?: boolean;
    RequiresTopologies?: boolean;
    UpdateTime?: string;
};

