import { Api } from "./apiSlice";

const TeacherApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    teacherRequest: builder.mutation({
      query: (data) => ({
        url: `/user/teachers/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["auth"],
    }),
    TeacherList: builder.query({
      query: () => ({
        url: `/user/teachers/`,
      }),
      providesTags: ["auth"],
    }),
    AproveTeacher: builder.query({
      query: (params) => ({
        url: `/user/approve-teacher/${params.id}`,
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useTeacherRequestMutation,
  useTeacherListQuery,
  useAproveTeacherQuery,
} = TeacherApi;
