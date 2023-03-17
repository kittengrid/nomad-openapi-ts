/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskEvent = {
    Details?: Record<string, string>;
    DiskLimit?: number;
    DiskSize?: number;
    DisplayMessage?: string;
    DownloadError?: string;
    DriverError?: string;
    DriverMessage?: string;
    ExitCode?: number;
    FailedSibling?: string;
    FailsTask?: boolean;
    GenericSource?: string;
    KillError?: string;
    KillReason?: string;
    KillTimeout?: number;
    Message?: string;
    RestartReason?: string;
    SetupError?: string;
    Signal?: number;
    StartDelay?: number;
    TaskSignal?: string;
    TaskSignalReason?: string;
    Time?: number;
    Type?: string;
    ValidationError?: string;
    VaultError?: string;
};

