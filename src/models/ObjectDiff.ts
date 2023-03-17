/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FieldDiff } from './FieldDiff';

export type ObjectDiff = {
    Fields?: Array<FieldDiff>;
    Name?: string;
    Objects?: Array<ObjectDiff>;
    Type?: string;
};

