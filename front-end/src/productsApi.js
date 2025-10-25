// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  keepUnusedDataFor:300 ,
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api/` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products/?populate=*`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery  } = productApi