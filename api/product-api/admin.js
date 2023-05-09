import { apiSlice } from "../apiSlice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProductDetails: build.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useLazyGetProductDetailsQuery} = extendedApi;
