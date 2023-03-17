/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AllocationMetric } from './AllocationMetric';
import type { EvaluationStub } from './EvaluationStub';

export type Evaluation = {
    AnnotatePlan?: boolean;
    BlockedEval?: string;
    ClassEligibility?: Record<string, boolean>;
    CreateIndex?: number;
    CreateTime?: number;
    DeploymentID?: string;
    EscapedComputedClass?: boolean;
    FailedTGAllocs?: Record<string, AllocationMetric>;
    ID?: string;
    JobID?: string;
    JobModifyIndex?: number;
    ModifyIndex?: number;
    ModifyTime?: number;
    Namespace?: string;
    NextEval?: string;
    NodeID?: string;
    NodeModifyIndex?: number;
    PreviousEval?: string;
    Priority?: number;
    QueuedAllocations?: Record<string, number>;
    QuotaLimitReached?: string;
    RelatedEvals?: Array<EvaluationStub>;
    SnapshotIndex?: number;
    Status?: string;
    StatusDescription?: string;
    TriggeredBy?: string;
    Type?: string;
    Wait?: number;
    WaitUntil?: string;
};

