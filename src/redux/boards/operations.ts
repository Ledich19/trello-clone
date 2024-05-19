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

export const getBoardById = createAsyncThunk('boards/getBoardById', async (id: number, thunkAPI) => {
  try {
    const { data } = await api.get<IBoardFull>(`board/${id}`);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('An error occurred');
  }
});

export const addBoard = createAsyncThunk('boards/addBoard', async (values: Omit<IBoard, 'id'>, thunkAPI) => {
  try {
    const { data } = await api.post<IBoards>('board', values);
    thunkAPI.dispatch(getAllBoards());
    return data.boards;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('An error occurred');
  }
});

export const updateBoard = createAsyncThunk('boards/getBoardById', async (values: IBoard, thunkAPI) => {
  try {
    const { data } = await api.put<{
      result: 'Updated';
    }>(`board/${values.id}`, values);
    thunkAPI.dispatch(getBoardById(values.id));
    return data.result;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('An error occurred');
  }
});

// list

// export const getAllBoards = createAsyncThunk('boards/getAll', async (_, thunkAPI) => {
//   try {
//     const { data } = await api.get<IBoards>('board');
//     return data.boards;
//   } catch (error) {
//     if (error instanceof Error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//     return thunkAPI.rejectWithValue('An error occurred');
//   }
// });

// export const getBoardById = createAsyncThunk('boards/getBoardById', async (id: number, thunkAPI) => {
//   try {
//     const { data } = await api.get<IBoardFull>(`board/${id}`);
//     return data;
//   } catch (error) {
//     if (error instanceof Error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//     return thunkAPI.rejectWithValue('An error occurred');
//   }
// });

export const addList = createAsyncThunk('list/addBoard', async (values: IListRequest, thunkAPI) => {
  try {
    const { data } = await api.post<IListResponse>(`board/${values.boardId}/list`, values.data);
    thunkAPI.dispatch(getBoardById(values.boardId));
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('An error occurred');
  }
});

// export const updateBoard = createAsyncThunk('boards/getBoardById', async (values: IBoard, thunkAPI) => {
//   try {
//     const { data } = await api.put<{
//       result: 'Updated';
//     }>(`board/${values.id}`, values);
//     thunkAPI.dispatch(getBoardById(values.id));
//     return data.result;
//   } catch (error) {
//     if (error instanceof Error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//     return thunkAPI.rejectWithValue('An error occurred');
//   }
// });
