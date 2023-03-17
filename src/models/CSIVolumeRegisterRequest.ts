/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CSIVolume } from './CSIVolume';

export type CSIVolumeRegisterRequest = {
    Namespace?: string;
    Region?: string;
    SecretID?: string;
    Volumes?: Array<CSIVolume>;
};

