import s from './boardBtn.module.scss';

interface IProps {
  text: string;
  type: 'light' | 'dark';
  className?: string;
}

const BoardBtn: React.FC<IProps> = ({ text, type, className }) => {
  return <button className={`${s.button} ${s[type]} ${className}`}>{text}</button>;
};

export default BoardBtn;
