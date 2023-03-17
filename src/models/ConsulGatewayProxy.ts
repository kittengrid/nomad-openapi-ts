/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsulGatewayBindAddress } from './ConsulGatewayBindAddress';

export type ConsulGatewayProxy = {
    Config?: Record<string, any>;
    ConnectTimeout?: number;
    EnvoyDNSDiscoveryType?: string;
    EnvoyGatewayBindAddresses?: Record<string, ConsulGatewayBindAddress>;
    EnvoyGatewayBindTaggedAddresses?: boolean;
    EnvoyGatewayNoDefaultBind?: boolean;
};

