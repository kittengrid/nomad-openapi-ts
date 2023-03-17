/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FuzzySearchRequest = {
    AllowStale?: boolean;
    AuthToken?: string;
    Context?: string;
    Filter?: string;
    Headers?: Record<string, string>;
    Namespace?: string;
    NextToken?: string;
    Params?: Record<string, string>;
    PerPage?: number;
    Prefix?: string;
    Region?: string;
    Reverse?: boolean;
    Text?: string;
    WaitIndex?: number;
    WaitTime?: number;
};

