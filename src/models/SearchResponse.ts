/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchResponse = {
    KnownLeader?: boolean;
    LastContact?: number;
    LastIndex?: number;
    Matches?: Record<string, Array<string>>;
    NextToken?: string;
    RequestTime?: number;
    Truncations?: Record<string, boolean>;
};

