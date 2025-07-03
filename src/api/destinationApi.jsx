import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AddDestination from "../components/AddDestination";
import { queries } from "@testing-library/dom";
export const destinationApi = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    getAllDestination: builder.query({
           query: (destination) => ({
        url: "",
        method: "GET",
        params: {},
      }),
transformErrorResponse: (res) => {
  if (Array.isArray(res)) {
    return res.sort((a, b) => b.id - a.id);
  }
  return res; // در غیر این صورت، فقط آن را برگردانید
},
      providesTags: ["Destinations"],
    }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
    }),
    deleteDestination: builder.mutation({
      query: ({id}) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
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
   

