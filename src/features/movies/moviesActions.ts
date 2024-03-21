import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TmdbBaseAddress } from '../../services/http/HttpService';
import { API_KEY } from 'react-native-dotenv';

export const searchMovie = createAsyncThunk<any, string>(
  'search/multi',
  async (title: string) => {
    const queryParams = { api_key: API_KEY, language: 'it', query: title };

    try {
      const response = await axios.get(TmdbBaseAddress + 'search/multi', {
        params: queryParams,
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);
