import { __AppConfig__ } from "@/app/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PasteRequest, PasteResponse, TokenResponse } from "./types/paste";

export const PasteAPI = createApi({
  reducerPath: "paste/api",
  baseQuery: fetchBaseQuery({
    baseUrl: __AppConfig__.__API__.baseUrl,
  }),
  endpoints: (builder) => ({
    getPaste: builder.query<PasteResponse, string>({
      query: (pasteId) => ({
        url: `/paste/${pasteId}`,
        method: "GET",
      }),
    }),
    createPaste: builder.mutation<TokenResponse, PasteRequest>({
      query: (body) => ({
        url: `/paste`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetPasteQuery, useCreatePasteMutation } = PasteAPI;
