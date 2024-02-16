import { Api } from "./apiSlice";

const AuthApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    CreateStudent: builder.mutation({
      query: (data) => ({
        url: `/user/register/`,
        method: "POST",
        body: data,
      }),
     
    }),
    Login: builder.mutation({
      query: (data) => ({
        url: `/user/login/`,
        method: "POST",
        body: data,
      }),
     
    }),
  }),
});

export const { useCreateStudentMutation, useLoginMutation } = AuthApi;
