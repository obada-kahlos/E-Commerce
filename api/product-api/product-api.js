import { apiSlice } from "../apiSlice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    getProductByCategory: build.query({
      query: ({ category }) => ({
        url: `/products/category/${category}`,
        method: "GET",
      }),
    }),
    getProductDetails: build.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
    }),

    deleteProduct: build.mutation({
      query: ({ id }) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    addProdut: build.mutation({
      query: ({ title, price, description, category, image }) => ({
        url: "/products",
        method: "POST",
        body: { title, price, description, category, image },
      }),
    }),
    editProduct: build.mutation({
      query: ({ title, price, description, category, image,id }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: { title, price, description, category, image },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByCategoryQuery,
  useGetProductDetailsQuery,
  useDeleteProductMutation,
  useAddProdutMutation,
  useEditProductMutation
} = extendedApi;
