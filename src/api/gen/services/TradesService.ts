/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Todo } from '../models/Todo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TradesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param mintCurrency
     * @param mintAsset
     * @param limit
     * @returns Todo List todos successfully
     * @throws ApiError
     */
    public getTrades(
        mintCurrency?: string | null,
        mintAsset?: string | null,
        limit?: number | null,
    ): CancelablePromise<Array<Todo>> {
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

}
