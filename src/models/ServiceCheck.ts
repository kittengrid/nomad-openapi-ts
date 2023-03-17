/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckRestart } from './CheckRestart';

export type ServiceCheck = {
    AddressMode?: string;
    Advertise?: string;
    Args?: Array<string>;
    Body?: string;
    CheckRestart?: CheckRestart;
    Command?: string;
    Expose?: boolean;
    FailuresBeforeCritical?: number;
    GRPCService?: string;
    GRPCUseTLS?: boolean;
    Header?: Record<string, Array<string>>;
    InitialStatus?: string;
    Interval?: number;
    Method?: string;
    Name?: string;
    OnUpdate?: string;
    Path?: string;
    PortLabel?: string;
    Protocol?: string;
    SuccessBeforePassing?: number;
    TLSSkipVerify?: boolean;
    TaskName?: string;
    Timeout?: number;
    Type?: string;
};

