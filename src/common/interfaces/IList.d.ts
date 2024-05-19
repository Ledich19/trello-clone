interface IList {
  id: number;
  title: string;
  cards: ICard[];
}
interface IListRequest {
  boardId: number;
  data: {
    title: string;
    position: 2;
  };
}
interface IListUpdateRequest {
  boardId: number;
  id: number;
  data: {
    title: string;
    position?: 2;
  };
}
interface IListResponse {
  result: 'Created' | 'Updated';
}
