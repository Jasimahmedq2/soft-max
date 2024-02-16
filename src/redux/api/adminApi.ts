import { Api } from "./apiSlice";

const AdminApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: `/user/categories/`,
        method: "POST",
        headers: {
          authorization: `Bearer ${data?.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useAddCategoryMutation } = AdminApi;
