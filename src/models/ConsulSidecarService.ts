/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsulProxy } from './ConsulProxy';

export type ConsulSidecarService = {
    DisableDefaultTCPCheck?: boolean;
    Port?: string;
    Proxy?: ConsulProxy;
    Tags?: Array<string>;
};

