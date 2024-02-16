import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import type {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from "@reduxjs/toolkit/query";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "https://softmaxshop.com/",
//   credentials: "include",
//   prepareHeaders: (headers) => {
//     // this method should retrieve the token without a hook
//     const token = "";

//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error && result.error.status === 401) {
//     // try to get a new token
//     const refreshResult = await baseQuery("/refreshToken", api, extraOptions);

//     if (refreshResult.data) {
//       // store the new token in the store or wherever you keep it
//       // api.dispatch(tokenReceived(refreshResult.data));
//       // retry the initial query
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // refresh failed - do something like redirect to login or show a "retry" button
//       // api.dispatch(loggedOut());
//     }
//   }
//   return result;
// };

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://softmaxshop.com/" }),
  endpoints: (builder) => ({}),
  tagTypes: ["course", "auth"],
});
