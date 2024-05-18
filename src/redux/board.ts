import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  title: string;
  lists: IList[];
};

const initialState: InitialState = {
  title: 'Моя тестова дошка',
  lists: [
    {
      id: 1,
      title: 'Плани',
      cards: [
        { id: 1, title: 'помити кота' },
        { id: 2, title: 'приготувати суп' },
        { id: 3, title: 'сходити в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процесі',
      cards: [{ id: 4, title: 'подивитися серіал' }],
    },
    {
      id: 3,
      title: 'Зроблено',
      cards: [
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
});

// export const {} = projectsSlice.actions;
export default boardSlice.reducer;
