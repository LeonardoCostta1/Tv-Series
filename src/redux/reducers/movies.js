// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/tv/" }),
  endpoints: (builder) => ({
    getMovieByCode: builder.query({
      query: (id) => `${id}?api_key=87f2c7d93db7f6b90c6388e00108e35e`
    }),
    getPopularSeries: builder.query({
      query: (category) => `${category}?api_key=87f2c7d93db7f6b90c6388e00108e35e`
    }),
    getOnlyMovieByCode: builder.query({
      query: (code) => `${code}?api_key=87f2c7d93db7f6b90c6388e00108e35e`
    }),
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieByCodeQuery, useGetPopularSeriesQuery,useGetOnlyMovieByCodeQuery } = moviesApi;
