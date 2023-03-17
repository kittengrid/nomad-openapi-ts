/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FieldDiff } from './FieldDiff';
import type { ObjectDiff } from './ObjectDiff';

export type TaskDiff = {
    Annotations?: Array<string>;
    Fields?: Array<FieldDiff>;
    Name?: string;
    Objects?: Array<ObjectDiff>;
    Type?: string;
};

