import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAllBoards, getBoardById } from './operations';

type InitialState = {
  board: IBoardFull;
  boards: IBoard[];
};

const initialState: InitialState = {
  board: {
    title: '',
    lists: [],
  },
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
      .addCase(getAllBoards.rejected, handleRejected)

      .addCase(getBoardById.pending, handlePending)
      // eslint-disable-next-line max-len
      .addCase(getBoardById.fulfilled, (state: InitialState, action: PayloadAction<IBoardFull>) => ({
        ...state,
        board: action.payload,
      }))
      .addCase(getBoardById.rejected, handleRejected);
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = boardsSlice.actions;
export default boardsSlice.reducer;
