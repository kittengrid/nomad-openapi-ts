/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobACL } from './JobACL';

export type ACLPolicy = {
    CreateIndex?: number;
    Description?: string;
    JobACL?: JobACL;
    ModifyIndex?: number;
    Name?: string;
    Rules?: string;
};

