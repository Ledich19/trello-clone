import s from './card.module.scss';

interface IProps {
  title: string;
}

const Card: React.FC<IProps> = ({ title }) => {
  return (
    <div className={s.card}>
      <div className={s.title}>{title}</div>
    </div>
  );
};

export default Card;
