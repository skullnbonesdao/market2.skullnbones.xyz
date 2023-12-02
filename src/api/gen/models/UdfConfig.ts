/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Exchange } from './Exchange';
import type { SymbolsType } from './SymbolsType';

export type UdfConfig = {
    exchanges: Array<Exchange>;
    supported_resolutions: Array<string>;
    supports_group_request: boolean;
    supports_marks: boolean;
    supports_search: boolean;
    supports_time: boolean;
    supports_timescale_marks: boolean;
    symbols_types: Array<SymbolsType>;
};

