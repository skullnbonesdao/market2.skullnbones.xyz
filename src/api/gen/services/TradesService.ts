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
     * @returns Price Get prices for currency
     * @throws ApiError
     */
    public getPrices(
        mintCurrency: string,
        mintAsset?: string | null,
    ): CancelablePromise<Array<Price>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/get_prices',
            query: {
                'mint_currency': mintCurrency,
                'mint_asset': mintAsset,
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
     * @param searchOption
     * @param search
     * @param limit
     * @returns Trade Get current market price changes
     * @throws ApiError
     */
    public search(
        searchOption: 'signature' | 'asset' | 'currency' | 'maker' | 'taker' | 'maker_and_taker',
        search: string,
        limit?: number | null,
    ): CancelablePromise<Array<Trade>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/search',
            query: {
                'search_option': searchOption,
                'search': search,
                'limit': limit,
            },
        });
    }

}
