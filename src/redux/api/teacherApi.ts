import { Api } from "./apiSlice";

const TeacherApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    teacherRequest: builder.mutation({
      query: (data) => ({
        url: `/user/teachers/`,
        method: "POST",
        body: data,
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
    TeacherCoures: builder.query({
      query: (info) => ({
        url: `/user/teacher/4/courses/`,
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }),
      providesTags: ["course"],
    }),
    TeacherCreateCourses: builder.mutation({
      query: (data) => ({
        url: `/user/courses/`,
        method: "POST",
        headers: {
          authorization: `Bearer ${data.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["course"],
    }),
    Categories: builder.query({
      query: (token) => ({
        url: `/user/categories/`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["course"],
    }),
    Teachers: builder.query({
      query: (token) => ({
        url: `/user/approved-teachers/`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["course"],
    }),
  }),
});

export const {
  useTeacherRequestMutation,
  useTeacherListQuery,
  useAproveTeacherQuery,
  useTeacherCouresQuery,
  useTeacherCreateCoursesMutation,
  useCategoriesQuery,
  useTeachersQuery,
} = TeacherApi;
