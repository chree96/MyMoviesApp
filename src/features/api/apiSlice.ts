import { TmdbBaseAddress } from '../../services/http/HttpService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from 'react-native-dotenv';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: TmdbBaseAddress,
  }),
  endpoints(builder) {
    return {
      fetchHomeMovies: builder.query<any, number>({
        query: (page = 1) => ({
          url: 'movie/popular',
          method: 'GET',
          params: {
            api_key: API_KEY,
            language: 'it',
            page,
          },
        }),
      }),
    };
  },
});

export const { useFetchHomeMoviesQuery } = apiSlice;
