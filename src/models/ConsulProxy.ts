/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsulExposeConfig } from './ConsulExposeConfig';
import type { ConsulUpstream } from './ConsulUpstream';

export type ConsulProxy = {
    Config?: Record<string, any>;
    ExposeConfig?: ConsulExposeConfig;
    LocalServiceAddress?: string;
    LocalServicePort?: number;
    Upstreams?: Array<ConsulUpstream>;
};

