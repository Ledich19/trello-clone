import { useAppSelector } from '../../app/hooks';
import List from './components/List/List';
import s from './board.module.scss';
import BoardBtn from './components/BoardBtn/BoardBtn';

const Board: React.FC = () => {
  const board = useAppSelector((state) => state.board);
  console.log(board);

  return (
    <div className={s.board}>
      <div className={s.head}>
        <button className={s.back}>+ Add list</button>
        <div className={s.title}>{board.title}</div>
        <div></div>
      </div>
      <div className={s.wrapper}>
        {board.lists.map((list) => (
          <List key={list.id} title={list.title} cards={list.cards} />
        ))}

        <div>
        <button className={s.button}>{`<- Home`}</button>
        </div>
      </div>
    </div>
  );
};

export default Board;
