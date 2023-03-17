/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsulIngressService } from './ConsulIngressService';

export type ConsulIngressListener = {
    Port?: number;
    Protocol?: string;
    Services?: Array<ConsulIngressService>;
};

