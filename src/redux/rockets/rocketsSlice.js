import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  rocketsArr: [],
  status: 'idle',
  error: null,
};

const rocketsSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getRockets.fulfilled, (state, action) => {
          state.status = 'fulfilled';
          const newRocketsArr = [];
          action.payload.forEach(rocket => {
            let newRocket = {
              img: rocket.flickr_images[0],
              id: rocket.id,
              name: rocket.name,
              description: rocket.description,
            }
            newRocketsArr.push(newRocket);
          });
          console.log(newRocketsArr);
          state.rocketsArr = newRocketsArr
        })
        .addCase(getRockets.pending, (state) => {
          state.status = 'Loading';
        })
        .addCase(getRockets.rejected, (state, action) => {
          state.status = 'rejected';
          state.error = action.error.message
        })
    },
  });
  
  export default rocketsSlice.reducer;