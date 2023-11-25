/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Price } from '../models/Price';
import type { PriceChange } from '../models/PriceChange';
import type { Trade } from '../models/Trade';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TradesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param mintAssets
     * @param mintCurrency
     * @returns Price Get current market prices
     * @throws ApiError
     */
    public getPrice(
        mintAssets: Array<string>,
        mintCurrency: string,
    ): CancelablePromise<Array<Price>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/get_price',
            query: {
                'mint_assets': mintAssets,
                'mint_currency': mintCurrency,
            },
        });
    }

    /**
     * @param mintCurrency
     * @param mintAsset
     * @param timespan
     * @returns PriceChange Get current market price changes
     * @throws ApiError
     */
    public getPriceChange(
        mintCurrency: string,
        mintAsset: string,
        timespan: 'day' | 'week' | 'month' | 'year',
    ): CancelablePromise<Array<PriceChange>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/get_price_change',
            query: {
                'mint_currency': mintCurrency,
                'mint_asset': mintAsset,
                'timespan': timespan,
            },
        });
    }

    /**
     * @param mintCurrency
     * @param mintAsset
     * @param limit
     * @returns Trade List todos successfully
     * @throws ApiError
     */
    public getTrades(
        mintCurrency?: string | null,
        mintAsset?: string | null,
        limit?: number | null,
    ): CancelablePromise<Array<Trade>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/get_trades',
            query: {
                'mint_currency': mintCurrency,
                'mint_asset': mintAsset,
                'limit': limit,
            },
        });
    }

    /**
     * @param by
     * @param search
     * @param limit
     * @returns Trade Get current market price changes
     * @throws ApiError
     */
    public search(
        by: 'signature' | 'asset' | 'currency' | 'maker' | 'taker' | 'maker_and_taker',
        search: string,
        limit?: number | null,
    ): CancelablePromise<Array<Trade>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/search',
            query: {
                'by': by,
                'search': search,
                'limit': limit,
            },
        });
    }

    /**
     * @param mintAssets
     * @returns Trade List todos successfully
     * @throws ApiError
     */
    public vecTest(
        mintAssets: Array<string>,
    ): CancelablePromise<Array<Trade>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/vec_test',
            path: {
                'mint_assets': mintAssets,
            },
        });
    }

}
