import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import List from './components/List/List';
import s from './board.module.scss';
import TitleEditor from './components/List/TitleEditor/TitleEditor';
import { getBoardById, updateBoard } from '../../redux/boards/operations';
import Modal from './components/Modal/Modal';

const Board: React.FC = () => {
  const { board } = useAppSelector((state) => state.boards);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const boardId = id !== undefined && !Number.isNaN(Number(id)) ? Number.parseInt(id, 10) : null;

  const handleOpenModal = (): void => {
    setIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (boardId) {
      dispatch(getBoardById(boardId));
    }
  }, [dispatch, boardId]);

  const onTitleChange = (title: string): void => {
    // console.log(title);
  };

  const onBoardTitleChange = (title: string): void => {
    if (boardId) {
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
          <button onClick={handleOpenModal} className={s.button}>
            + Add list
          </button>
        </div>
        <Modal isOpen={isOpen} onClose={handleCloseModal} boardId={boardId} />
      </div>
    </div>
  );
};

export default Board;
