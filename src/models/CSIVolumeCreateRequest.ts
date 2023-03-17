/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSIVolume } from './CSIVolume';

export type CSIVolumeCreateRequest = {
    Namespace?: string;
    Region?: string;
    SecretID?: string;
    Volumes?: Array<CSIVolume>;
};

