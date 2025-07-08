import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    getAllDestination: builder.query({
      query: () => "/destination", // ساده و دقیق
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Destinations", id })), { type: "Destinations", id: "LIST" }]
          : [{ type: "Destinations", id: "LIST" }],
    }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "/destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: [{ type: "Destinations", id: "LIST" }],
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `/destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Destinations", id: arg.id }],
    }),
deleteDestination: builder.mutation({
  query: (id) => ({
    url: `/destination/${id}`, // ❗ اینجا باید بدون s باشه
    method: "DELETE",
  }),
  invalidatesTags: ["Destinations"],
}),

  
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationApi;
