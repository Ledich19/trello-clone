import React, { useEffect } from 'react';
import Card from '../Card/Card';
import s from './list.module.scss';
import TitleEditor from './TitleEditor/TitleEditor';
import { updateList } from '../../../../redux/boards/operations';
import { useAppDispatch } from '../../../../app/hooks';

interface IProps {
  title: string;
  cards: ICard[];
  boardId: number | null;
  id: number | null;
}

const List: React.FC<IProps> = ({ title, cards, boardId, id }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);

  const onTitleChange = (text: string): void => {
    if (!boardId || !id) return;
    const data = {
      boardId,
      id,
      data: {
        title: text,
      },
    };
    dispatch(updateList(data));
  };

  return (
    <div className={s.list}>
      <TitleEditor className={s.title} title={title} onTitleChange={onTitleChange} />
      <div className={s.wrapper}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
      <button className={s.button}>+ Add card</button>
    </div>
  );
};

export default List;
