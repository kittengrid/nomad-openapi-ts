/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeploymentAllocHealthRequest = {
    DeploymentID?: string;
    HealthyAllocationIDs?: Array<string>;
    Namespace?: string;
    Region?: string;
    SecretID?: string;
    UnhealthyAllocationIDs?: Array<string>;
};

