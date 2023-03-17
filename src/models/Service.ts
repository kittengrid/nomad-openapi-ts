/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckRestart } from './CheckRestart';
import type { ConsulConnect } from './ConsulConnect';
import type { ServiceCheck } from './ServiceCheck';

export type Service = {
    Address?: string;
    AddressMode?: string;
    CanaryMeta?: Record<string, string>;
    CanaryTags?: Array<string>;
    CheckRestart?: CheckRestart;
    Checks?: Array<ServiceCheck>;
    Connect?: ConsulConnect;
    EnableTagOverride?: boolean;
    Meta?: Record<string, string>;
    Name?: string;
    OnUpdate?: string;
    PortLabel?: string;
    Provider?: string;
    TaggedAddresses?: Record<string, string>;
    Tags?: Array<string>;
    TaskName?: string;
};

