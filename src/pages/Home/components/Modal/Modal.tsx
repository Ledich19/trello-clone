import React, { useState } from 'react';
import s from './modal.module.scss';
import { useAppDispatch } from '../../../../app/hooks';
import { addBoard } from '../../../../redux/boards/operations';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!formData.name.trim()) {
      setError('Назва дошки не може бути порожньою.');
      return;
    }

    if (!/^[a-zA-Zа-яА-Я0-9\s\-._]+$/u.test(formData.name.trim())) {
      setError('Некоректна назва дошки. Допустимі символи: літери, цифри, пробіли, тире, крапки, нижні підкреслення.');
      return;
    }

    const data = {
      title: formData.name,
      custom: {},
    };
    dispatch(addBoard(data));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <span className={s.closeButton} onClick={onClose}>
          &times;
        </span>
        <form className={s.form} onSubmit={handleSubmit}>
          {error && <div className={s.error}>{error}</div>}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Board name"
            // required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
