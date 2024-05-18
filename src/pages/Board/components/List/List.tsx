import s from './list.module.scss';

interface IProps {
  title: string;
  cards: ICard[];
}

const List: React.FC<IProps> = ({ title, cards }) => {
  return <div className={s.list}>

<div className={s.title}>{title}</div>
  </div>;
};

export default List;
