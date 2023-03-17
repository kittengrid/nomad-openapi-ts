/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariableItems } from './VariableItems';

export type Variable = {
    CreateIndex?: number;
    CreateTime?: number;
    Items?: VariableItems;
    ModifyIndex?: number;
    ModifyTime?: number;
    Namespace?: string;
    Path?: string;
};

