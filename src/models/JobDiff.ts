/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FieldDiff } from './FieldDiff';
import type { ObjectDiff } from './ObjectDiff';
import type { TaskGroupDiff } from './TaskGroupDiff';

export type JobDiff = {
    Fields?: Array<FieldDiff>;
    ID?: string;
    Objects?: Array<ObjectDiff>;
    TaskGroups?: Array<TaskGroupDiff>;
    Type?: string;
};

