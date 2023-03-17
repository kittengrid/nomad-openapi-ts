/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsulGateway } from './ConsulGateway';
import type { ConsulSidecarService } from './ConsulSidecarService';
import type { SidecarTask } from './SidecarTask';

export type ConsulConnect = {
    Gateway?: ConsulGateway;
    Native?: boolean;
    SidecarService?: ConsulSidecarService;
    SidecarTask?: SidecarTask;
};

