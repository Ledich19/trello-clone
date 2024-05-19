/* eslint-disable react/require-default-props */
import React, { useEffect, useRef, useState } from 'react';
import s from './titleEditor.module.scss';

interface TitleEditorProps {
  title: string;
  className?: string;
  onTitleChange: (newTitle: string) => void;
}

const TitleEditor: React.FC<TitleEditorProps> = ({ title, onTitleChange, className = '' }) => {
  const [isInput, setIsInput] = useState(false);
  const [inputValue, setInputValue] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  const showInput = (): void => {
    setInputValue(title);
    setIsInput(true);
  };

  useEffect(() => {
    if (isInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInput]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleBlur = (): void => {
    if (inputValue.trim() !== '') {
      onTitleChange(inputValue);
    }
    setIsInput(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div className={s.title}>
      {isInput ? (
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          placeholder="Board name"
          className={s.input}
          ref={inputRef}
        />
      ) : (
        <div onClick={showInput} className={className}>
          {title}
        </div>
      )}
    </div>
  );
};

export default TitleEditor;
