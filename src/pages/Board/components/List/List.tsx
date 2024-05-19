import React, { useEffect, useRef, useState } from 'react';
import Card from '../Card/Card';
import s from './list.module.scss';
import TitleEditor from './TitleEditor/TitleEditor';

interface IProps {
  title: string;
  cards: ICard[];
  onTitleChange: (newTitle: string) => void;
}

const List: React.FC<IProps> = ({ title, cards, onTitleChange }) => {
  useEffect(() => {}, []);

  return (
    <div className={s.list}>
      <TitleEditor title={title} onTitleChange={onTitleChange} />
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
