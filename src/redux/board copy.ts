import { createSlice } from '@reduxjs/toolkit';

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

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
});

// export const {} = projectsSlice.actions;
export default boardsSlice.reducer;
