interface IBoard {
  id: number;
  title: string;
  custom?: { [key: string]: string };
}

interface IBoards {
  boards: IBoard[];
}

interface IBoardFull {
  title: '';
  lists: IList[];
}
