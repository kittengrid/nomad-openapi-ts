/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ScalingPolicy = {
    CreateIndex?: number;
    Enabled?: boolean;
    ID?: string;
    Max?: number;
    Min?: number;
    ModifyIndex?: number;
    Namespace?: string;
    Policy?: Record<string, any>;
    Target?: Record<string, string>;
    Type?: string;
};

