import { useAppSelector } from '../../app/hooks';
import List from './components/List/List';
import s from './board.module.scss';

const Board: React.FC = () => {
  const board = useAppSelector((state) => state.board);
  console.log(board);

  return (
    <div className={s.board}>
      <div className={s.head}>
        <button>{`<- Home`}</button>
        <div>{board.title}</div>
      </div>
      <div className={s.wrapper}>
        {board.lists.map((list) => (
          <List key={list.id} title={list.title} cards={list.cards} />
        ))}

        <button>+ Add list</button>
      </div>
    </div>
  );
};

export default Board;
