import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TmdbBaseAddress } from '../../services/http/HttpService';
import { API_KEY } from 'react-native-dotenv';

export const retrieveUserToken = createAsyncThunk(
  'authentication/guest_session/new',
  async () => {
    const queryParams = { api_key: API_KEY };

    try {
      const response = await axios.get(
        TmdbBaseAddress + 'authentication/guest_session/new',
        {
          params: queryParams,
        },
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);
