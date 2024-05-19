import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAllBoards } from './operations';

type InitialState = {
  boards: IBoard[];
};

const initialState: InitialState = {
  boards: [
    { id: 1, title: 'покупки', custom: { background: 'red' } },
    { id: 2, title: 'підготовка до весілля', custom: { background: 'green' } },
    { id: 3, title: 'розробка інтернет-магазину', custom: { background: 'blue' } },
    { id: 4, title: 'курс по просуванню у соцмережах', custom: { background: 'grey' } },
  ],
};

const handlePending = (state: InitialState): InitialState => state;

const handleRejected = (state: InitialState): InitialState => state;

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoards.pending, handlePending)
      .addCase(getAllBoards.fulfilled, (state: InitialState, action: PayloadAction<IBoard[]>) => ({
        ...state,
        boards: action.payload,
      }))
      .addCase(getAllBoards.rejected, handleRejected);
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = boardsSlice.actions;
export default boardsSlice.reducer;
