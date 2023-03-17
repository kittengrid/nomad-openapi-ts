/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchRequest = {
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
    WaitIndex?: number;
    WaitTime?: number;
};

