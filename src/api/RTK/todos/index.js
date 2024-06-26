import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todoSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: (params) => ({
        method: 'post',
        url: `todos?${params}`,
        body: { hello: true }
      }),
    })
  })
})

export const { useGetTodosQuery } = todosApi
