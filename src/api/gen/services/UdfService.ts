/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UdfConfig } from '../models/UdfConfig';
import type { UdfHistory } from '../models/UdfHistory';
import type { UdfSearchSymbol } from '../models/UdfSearchSymbol';
import type { UdfSymbolInfo } from '../models/UdfSymbolInfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UdfService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * UDF Home
     * UDF Home
     *
     * Responses with server time.
     * @returns string Get time successfully
     * @throws ApiError
     */
    public getHome(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/',
        });
    }

    /**
     * Get UDF-Config
     * Get UDF-Config
     *
     * Responses with a UDF config in json.
     * @returns UdfConfig Response: Config successful
     * @throws ApiError
     */
    public getConfig(): CancelablePromise<Array<UdfConfig>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/config',
        });
    }

    /**
     * Get History request
     * Get History request
     *
     * Responses with a History-Result in json (oclh).
     * @param symbol
     * @param from
     * @param to
     * @param resolution
     * @param countback
     * @param currencyCode
     * @returns UdfHistory Response: SymbolInfo successful
     * @throws ApiError
     */
    public getHistory(
        symbol: string,
        from?: number | null,
        to?: number | null,
        resolution?: string | null,
        countback?: number | null,
        currencyCode?: string | null,
    ): CancelablePromise<Array<UdfHistory>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/history',
            query: {
                'symbol': symbol,
                'from': from,
                'to': to,
                'resolution': resolution,
                'countback': countback,
                'currencyCode': currencyCode,
            },
        });
    }

    /**
     * Get Search request
     * Get Search request
     *
     * Responses with a Search-Result in json.
     * @param query
     * @param limit
     * @param type
     * @param exchange
     * @returns UdfSearchSymbol Response: SymbolInfo successful
     * @throws ApiError
     */
    public getSearch(
        query: string,
        limit: number,
        type?: string | null,
        exchange?: string | null,
    ): CancelablePromise<Array<UdfSearchSymbol>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/search',
            query: {
                'query': query,
                'type': type,
                'exchange': exchange,
                'limit': limit,
            },
        });
    }

    /**
     * Get Symbol group request
     * Get Symbol group request
     *
     * Responses with a SymbolGroup in json.
     * @param group
     * @returns UdfSymbolInfo Response: SymbolInfo successful
     * @throws ApiError
     */
    public getSymbolInfo(
        group?: string | null,
    ): CancelablePromise<Array<UdfSymbolInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/symbol_info',
            query: {
                'group': group,
            },
        });
    }

    /**
     * Get Symbol resolve request
     * Get Symbol resolve request
     *
     * Responses with a SymbolInfo in json.
     * @param symbol
     * @returns UdfSymbolInfo Response: SymbolInfo successful
     * @throws ApiError
     */
    public getSymbols(
        symbol: string,
    ): CancelablePromise<Array<UdfSymbolInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/symbols',
            query: {
                'symbol': symbol,
            },
            errors: {
                404: `Nothing found`,
            },
        });
    }

    /**
     * Get ServerTime
     * Get ServerTime
     *
     * Responses with server time.
     * @returns string Response: Time successful
     * @throws ApiError
     */
    public getTime(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/udf/time',
        });
    }

}
