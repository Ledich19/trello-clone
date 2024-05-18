import BoardBtn from '../BoardBtn/BoardBtn';
import Card from '../Card/Card';
import s from './list.module.scss';

interface IProps {
  title: string;
  cards: ICard[];
}

const List: React.FC<IProps> = ({ title, cards }) => {
  return (
    <div className={s.list}>
      <div className={s.title}>{title}</div>

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
