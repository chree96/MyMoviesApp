import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './tmdbAuthSlice.types';
import { retrieveUserToken } from './tmdbAuthActions';
import { RootState } from '../../app/store';

const initialState: AuthState = {
  userToken: null,
};

export const tmdbAuthSlice = createSlice({
  name: 'tmdbAuth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(retrieveUserToken.fulfilled, (state, action) => {
      const { success, guest_session_id } = action.payload;

      if (success) {
        state.userToken = guest_session_id;
      }
    });
  },
});

export const selectUserToken = (state: RootState) => state.tmdbAuth.userToken;

export default tmdbAuthSlice.reducer;
