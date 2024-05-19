import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import List from './components/List/List';
import s from './board.module.scss';
import TitleEditor from './components/List/TitleEditor/TitleEditor';
import { getBoardById, updateBoard } from '../../redux/boards/operations';

const Board: React.FC = () => {
  const { board } = useAppSelector((state) => state.boards);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const boardId = Number.parseInt(id, 10);
      dispatch(getBoardById(boardId));
    }
  }, [id, dispatch]);

  const onTitleChange = (title: string): void => {
    // console.log(title);
  };

  const onBoardTitleChange = (title: string): void => {
    if (id) {
      const boardId = Number.parseInt(id, 10);
      dispatch(updateBoard({ title, id: boardId }));
    }
  };

  return (
    <div className={s.board}>
      <div className={s.head}>
        <button className={s.back}>{'<- Home'}</button>
        <TitleEditor className={s.title} title={board.title} onTitleChange={onBoardTitleChange} />
        <div />
      </div>
      <div className={s.wrapper}>
        {(board.lists || []).map((list) => (
          <List key={list.id} title={list.title} cards={list.cards} onTitleChange={onTitleChange} />
        ))}

        <div>
          <button className={s.button}>+ Add list</button>
        </div>
      </div>
    </div>
  );
};

export default Board;
