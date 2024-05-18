import React from 'react';
import { Link } from 'react-router-dom';
import s from './home.module.scss';
import Board from './components/Board/Board';

const boards = [
  { id: 1, title: 'покупки', custom: { background: 'red' } },
  { id: 2, title: 'підготовка до весілля', custom: { background: 'green' } },
  { id: 3, title: 'розробка інтернет-магазину', custom: { background: 'blue' } },
  { id: 4, title: 'курс по просуванню у соцмережах', custom: { background: 'grey' } },
];

const Home: React.FC = () => (
  <div className={s.home}>
    <div className={s.title}>My boards</div>

    <div className={s.wrapper}>
      {boards.map((board) => (
        <Link to={`/board/${board.id}`} key={board.id} className={s.link}>
          <Board title={board.title} custom={board.custom} />
        </Link>
      ))}

      <button className={`${s.button} ${s.link}`}> + create desk</button>
    </div>
  </div>
);

export default Home;
