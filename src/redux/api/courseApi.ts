import { Api } from "./apiSlice";

const CourseApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    FindeCourses: builder.query({
      query: (token) => ({
        url: `/user/courses/`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["course"],
    }),
    StudentCourses: builder.query({
      query: (creadential) => ({
        url: `/user/student-courses/${creadential.id}/`,
        headers: {
          authorization: `Bearer ${creadential.token}`,
        },
      }),
      providesTags: ["course"],
    }),
    EnrollCourses: builder.mutation({
      query: (data) => ({
        url: `/user/enroll-course/`,
        method: "POST",
        headers: {
          authorization: `Bearer ${data.token}`,
        },
        body: data.info,
      }),
      invalidatesTags: ["course"],
    }),
  }),
});

export const {
  useFindeCoursesQuery,
  useStudentCoursesQuery,
  useEnrollCoursesMutation,
} = CourseApi;
