/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { CursorService } from './services/CursorService';
import { TradesService } from './services/TradesService';
import { UdfService } from './services/UdfService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class APIClient {

    public readonly cursor: CursorService;
    public readonly trades: TradesService;
    public readonly udf: UdfService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '0.3.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.cursor = new CursorService(this.request);
        this.trades = new TradesService(this.request);
        this.udf = new UdfService(this.request);
    }
}

