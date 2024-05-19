import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/request';

export const getAllBoards = createAsyncThunk('boards/getAll', async (_, thunkAPI) => {
  try {
    const { data } = await api.get<IBoards>('board');
    return data.boards;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('An error occurred');
  }
});
