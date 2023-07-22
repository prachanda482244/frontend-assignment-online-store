import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../Config/config'
export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    tagTypes: ["readAllProducts"],
    endpoints: (builder) => ({
        readAllProducts: builder.query({
            query: () => {
                return {
                    url: '/products',
                    method: 'GET'
                }
            },
            providesTags: ["readAllProducts"]
        }),
        readSingleProduct: builder.query({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: 'GET'
                }
            }
        }),
        createProducts: builder.mutation({
            query: (body) => {
                return {
                    url: '/products/',
                    method: 'GET',
                    body: body
                }
            },
            invalidatesTags: ["readAllProducts"]
        })


    }),
})
export const { useReadAllProductsQuery, useReadSingleProductQuery, useCreateProductsMutation } = productApi