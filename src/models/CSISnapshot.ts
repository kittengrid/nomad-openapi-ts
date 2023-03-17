/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSISecrets } from './CSISecrets';

export type CSISnapshot = {
    CreateTime?: number;
    ExternalSourceVolumeID?: string;
    ID?: string;
    IsReady?: boolean;
    Name?: string;
    Parameters?: Record<string, string>;
    PluginID?: string;
    Secrets?: CSISecrets;
    SizeBytes?: number;
    SourceVolumeID?: string;
};

