/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Todo } from '../models/Todo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TodoService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List todos from in-memory storage.
     * List todos from in-memory storage.
     *
     * List all todos from in-memory storage.
     * @param contains Filters the returned `Todo` items according to whether they contain the specified string.
     * @param order Order the returned `Todo` items.
     * @returns Todo List todos successfully
     * @throws ApiError
     */
    public listTodos(
        contains?: string | null,
        order?: 'ascending_id' | 'descending_id' | null,
    ): CancelablePromise<Array<Todo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/todo',
            query: {
                'contains': contains,
                'order': order,
            },
        });
    }

    /**
     * Create new todo item.
     * Create new todo item.
     *
     * Creates new todo item to in-memory storage if it is unique by id.
     * @param requestBody
     * @returns Todo Todo created successfully
     * @throws ApiError
     */
    public createTodo(
        requestBody: Todo,
    ): CancelablePromise<Todo> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/todo',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Todo already exists`,
            },
        });
    }

    /**
     * Delete todo item by id.
     * Delete todo item by id.
     *
     * Delete todo item by id from in-memory storage.
     * @param id Todo's unique id
     * @returns any Delete successful
     * @throws ApiError
     */
    public deleteTodo(
        id: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/todo/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Missing todo_apikey request header`,
                401: `Unauthorized to delete todo`,
                404: `Todo not found to delete`,
            },
        });
    }

}
