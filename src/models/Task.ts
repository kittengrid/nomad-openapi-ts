/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Affinity } from './Affinity';
import type { Constraint } from './Constraint';
import type { DispatchPayloadConfig } from './DispatchPayloadConfig';
import type { LogConfig } from './LogConfig';
import type { Resources } from './Resources';
import type { RestartPolicy } from './RestartPolicy';
import type { ScalingPolicy } from './ScalingPolicy';
import type { Service } from './Service';
import type { TaskArtifact } from './TaskArtifact';
import type { TaskCSIPluginConfig } from './TaskCSIPluginConfig';
import type { TaskLifecycle } from './TaskLifecycle';
import type { Template } from './Template';
import type { Vault } from './Vault';
import type { VolumeMount } from './VolumeMount';

export type Task = {
    Affinities?: Array<Affinity>;
    Artifacts?: Array<TaskArtifact>;
    CSIPluginConfig?: TaskCSIPluginConfig;
    Config?: Record<string, any>;
    Constraints?: Array<Constraint>;
    DispatchPayload?: DispatchPayloadConfig;
    Driver?: string;
    Env?: Record<string, string>;
    KillSignal?: string;
    KillTimeout?: number;
    Kind?: string;
    Leader?: boolean;
    Lifecycle?: TaskLifecycle;
    LogConfig?: LogConfig;
    Meta?: Record<string, string>;
    Name?: string;
    Resources?: Resources;
    RestartPolicy?: RestartPolicy;
    ScalingPolicies?: Array<ScalingPolicy>;
    Services?: Array<Service>;
    ShutdownDelay?: number;
    Templates?: Array<Template>;
    User?: string;
    Vault?: Vault;
    VolumeMounts?: Array<VolumeMount>;
};

