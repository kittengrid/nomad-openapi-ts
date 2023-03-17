/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RaftServer } from './RaftServer';

export type RaftConfiguration = {
    Index?: number;
    Servers?: Array<RaftServer>;
};

