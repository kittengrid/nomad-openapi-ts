/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Affinity } from './Affinity';
import type { Constraint } from './Constraint';
import type { MigrateStrategy } from './MigrateStrategy';
import type { Multiregion } from './Multiregion';
import type { ParameterizedJobConfig } from './ParameterizedJobConfig';
import type { PeriodicConfig } from './PeriodicConfig';
import type { ReschedulePolicy } from './ReschedulePolicy';
import type { Spread } from './Spread';
import type { TaskGroup } from './TaskGroup';
import type { UpdateStrategy } from './UpdateStrategy';

export type Job = {
    Affinities?: Array<Affinity>;
    AllAtOnce?: boolean;
    Constraints?: Array<Constraint>;
    ConsulNamespace?: string;
    ConsulToken?: string;
    CreateIndex?: number;
    Datacenters?: Array<string>;
    DispatchIdempotencyToken?: string;
    Dispatched?: boolean;
    ID?: string;
    JobModifyIndex?: number;
    Meta?: Record<string, string>;
    Migrate?: MigrateStrategy;
    ModifyIndex?: number;
    Multiregion?: Multiregion;
    Name?: string;
    Namespace?: string;
    NomadTokenID?: string;
    ParameterizedJob?: ParameterizedJobConfig;
    ParentID?: string;
    Payload?: string;
    Periodic?: PeriodicConfig;
    Priority?: number;
    Region?: string;
    Reschedule?: ReschedulePolicy;
    Spreads?: Array<Spread>;
    Stable?: boolean;
    Status?: string;
    StatusDescription?: string;
    Stop?: boolean;
    SubmitTime?: number;
    TaskGroups?: Array<TaskGroup>;
    Type?: string;
    Update?: UpdateStrategy;
    VaultNamespace?: string;
    VaultToken?: string;
    Version?: number;
};

