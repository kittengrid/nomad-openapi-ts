/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuotaLimit } from './QuotaLimit';

export type QuotaSpec = {
    CreateIndex?: number;
    Description?: string;
    Limits?: Array<QuotaLimit>;
    ModifyIndex?: number;
    Name?: string;
};

