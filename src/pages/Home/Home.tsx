import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './home.module.scss';
import Board from './components/Board/Board';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllBoards } from '../../redux/boards/operations';
import Modal from './components/Modal/Modal';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { boards } = useAppSelector((state) => state.boards);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const handleOpenModal = (): void => {
    setIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div className={s.home}>
      <div className={s.title}>My boards</div>

      <div className={s.wrapper}>
        {boards.map((board) => (
          <Link to={`/board/${board.id}`} key={board.id} className={s.link}>
            <Board title={board.title} custom={board.custom} />
          </Link>
        ))}

        <Modal isOpen={isOpen} onClose={handleCloseModal} />
        <button onClick={handleOpenModal} className={`${s.button} ${s.link}`}>
          {' '}
          + create desk
        </button>
      </div>
    </div>
  );
};
export default Home;
