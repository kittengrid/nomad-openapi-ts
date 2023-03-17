/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChangeScript } from './ChangeScript';
import type { WaitConfig } from './WaitConfig';

export type Template = {
    ChangeMode?: string;
    ChangeScript?: ChangeScript;
    ChangeSignal?: string;
    DestPath?: string;
    EmbeddedTmpl?: string;
    Envvars?: boolean;
    Gid?: number;
    LeftDelim?: string;
    Perms?: string;
    RightDelim?: string;
    SourcePath?: string;
    Splay?: number;
    Uid?: number;
    VaultGrace?: number;
    Wait?: WaitConfig;
};

