/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ACLTokenRoleLink } from './ACLTokenRoleLink';

export type ACLToken = {
    AccessorID?: string;
    CreateIndex?: number;
    CreateTime?: string;
    ExpirationTTL?: number;
    ExpirationTime?: string;
    Global?: boolean;
    ModifyIndex?: number;
    Name?: string;
    Policies?: Array<string>;
    Roles?: Array<ACLTokenRoleLink>;
    SecretID?: string;
    Type?: string;
};

