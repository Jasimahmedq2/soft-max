import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://softmaxshop.com/" }),
  endpoints: (builder) => ({}),
  tagTypes: ["course", "auth"],
});
