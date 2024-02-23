// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => ({
        url: `pokemon/${name}`,
        method: "GET",
      }),
      providesTags: ["Pokemon"],
    }),
    addPokemonByName: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `pokemon/${data.id}`,
          method: "POST",
          body: data?.pokemon,
        };
      },
      invalidatesTags: ["Pokemon"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = baseApi;
