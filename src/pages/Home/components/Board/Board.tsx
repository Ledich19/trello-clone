import React from 'react';
import s from './board.module.scss';

interface IProps {
  title: string;
  custom: { [key: string]: string };
}

const Board: React.FC<IProps> = ({ title, custom }) => (
  <button className={s.board} style={custom}>
    {title}
  </button>
);
export default Board;
