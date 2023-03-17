/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ACLTokenRoleLink } from './ACLTokenRoleLink';

export type ACLTokenListStub = {
    AccessorID?: string;
    CreateIndex?: number;
    CreateTime?: string;
    Global?: boolean;
    ModifyIndex?: number;
    Name?: string;
    Policies?: Array<string>;
    Roles?: Array<ACLTokenRoleLink>;
    Type?: string;
    expiration_time?: string;
};

