/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Affinity } from './Affinity';
import type { Constraint } from './Constraint';
import type { Consul } from './Consul';
import type { EphemeralDisk } from './EphemeralDisk';
import type { MigrateStrategy } from './MigrateStrategy';
import type { NetworkResource } from './NetworkResource';
import type { ReschedulePolicy } from './ReschedulePolicy';
import type { RestartPolicy } from './RestartPolicy';
import type { ScalingPolicy } from './ScalingPolicy';
import type { Service } from './Service';
import type { Spread } from './Spread';
import type { Task } from './Task';
import type { UpdateStrategy } from './UpdateStrategy';
import type { VolumeRequest } from './VolumeRequest';

export type TaskGroup = {
    Affinities?: Array<Affinity>;
    Constraints?: Array<Constraint>;
    Consul?: Consul;
    Count?: number;
    EphemeralDisk?: EphemeralDisk;
    MaxClientDisconnect?: number;
    Meta?: Record<string, string>;
    Migrate?: MigrateStrategy;
    Name?: string;
    Networks?: Array<NetworkResource>;
    ReschedulePolicy?: ReschedulePolicy;
    RestartPolicy?: RestartPolicy;
    Scaling?: ScalingPolicy;
    Services?: Array<Service>;
    ShutdownDelay?: number;
    Spreads?: Array<Spread>;
    StopAfterClientDisconnect?: number;
    Tasks?: Array<Task>;
    Update?: UpdateStrategy;
    Volumes?: Record<string, VolumeRequest>;
};

