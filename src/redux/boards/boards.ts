import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAllBoards } from './operations';

type InitialState = {
  boards: IBoard[];
};

const initialState: InitialState = {
  boards: [],
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

    // .addCase(addBoard.pending, handlePending)
    // .addCase(addBoard.fulfilled, (state: InitialState, action: PayloadAction<IBoard[]>) => ({
    //   ...state,
    //   boards: state.boards,
    // }))
    // .addCase(addBoard.rejected, handleRejected);
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = boardsSlice.actions;
export default boardsSlice.reducer;
