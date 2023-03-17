/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FieldDiff } from './FieldDiff';
import type { ObjectDiff } from './ObjectDiff';
import type { TaskDiff } from './TaskDiff';

export type TaskGroupDiff = {
    Fields?: Array<FieldDiff>;
    Name?: string;
    Objects?: Array<ObjectDiff>;
    Tasks?: Array<TaskDiff>;
    Type?: string;
    Updates?: Record<string, number>;
};

