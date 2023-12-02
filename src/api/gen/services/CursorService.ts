/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CursorBlock } from '../models/CursorBlock';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CursorService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns CursorBlock Request cursors
     * @throws ApiError
     */
    public getCursor(): CancelablePromise<Array<CursorBlock>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/get_cursor',
        });
    }

}
