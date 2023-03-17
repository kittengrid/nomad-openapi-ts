/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NamespaceCapabilities } from './NamespaceCapabilities';

export type Namespace = {
    Capabilities?: NamespaceCapabilities;
    CreateIndex?: number;
    Description?: string;
    Meta?: Record<string, string>;
    ModifyIndex?: number;
    Name?: string;
    Quota?: string;
};

