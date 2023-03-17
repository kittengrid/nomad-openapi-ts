/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ServerHealth = {
    Address?: string;
    Healthy?: boolean;
    ID?: string;
    LastContact?: number;
    LastIndex?: number;
    LastTerm?: number;
    Leader?: boolean;
    Name?: string;
    SerfStatus?: string;
    StableSince?: string;
    Version?: string;
    Voter?: boolean;
};

