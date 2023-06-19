import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  missionsArr: [],
  status: 'idle',
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionIdx = state.missionsArr.findIndex((mission) => mission.id === action.payload);
      state.missionsArr[missionIdx].activeMember = true; 
    },
    leaveMission: (state, action) => {
      const missionIdx = state.missionsArr.findIndex((mission) => mission.id === action.payload);
      state.missionsArr[missionIdx].activeMember = false; 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        const newArr = [];
        action.payload.forEach(mission => {
          let newMission = {
            id: mission.mission_id,
            name: mission.mission_name,
            description: mission.description,
            activeMember: false
          }
          newArr.push(newMission)
        });
        state.missionsArr = newArr
      })
      .addCase(getMissions.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message
      })
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions

export default missionsSlice.reducer;