/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsulGatewayTLSConfig } from './ConsulGatewayTLSConfig';
import type { ConsulIngressListener } from './ConsulIngressListener';

export type ConsulIngressConfigEntry = {
    Listeners?: Array<ConsulIngressListener>;
    TLS?: ConsulGatewayTLSConfig;
};

