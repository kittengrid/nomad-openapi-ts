/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsulGatewayProxy } from './ConsulGatewayProxy';
import type { ConsulIngressConfigEntry } from './ConsulIngressConfigEntry';
import type { ConsulTerminatingConfigEntry } from './ConsulTerminatingConfigEntry';

export type ConsulGateway = {
    Ingress?: ConsulIngressConfigEntry;
    Mesh?: any;
    Proxy?: ConsulGatewayProxy;
    Terminating?: ConsulTerminatingConfigEntry;
};

