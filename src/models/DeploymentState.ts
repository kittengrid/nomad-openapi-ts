/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeploymentState = {
    AutoRevert?: boolean;
    DesiredCanaries?: number;
    DesiredTotal?: number;
    HealthyAllocs?: number;
    PlacedAllocs?: number;
    PlacedCanaries?: Array<string>;
    ProgressDeadline?: number;
    Promoted?: boolean;
    RequireProgressBy?: string;
    UnhealthyAllocs?: number;
};

