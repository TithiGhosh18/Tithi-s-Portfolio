import React, { useEffect, useState } from 'react';

const WordTyped = ({ strings, wordDelay = 500, loop = true }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    const words = strings[stringIndex].split(' ');
    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setText(prev => (prev ? `${prev} ${words[wordIndex]}` : words[wordIndex]));
        setWordIndex(prev => prev + 1);
      }, wordDelay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (loop) {
          setText('');
          setWordIndex(0);
          setStringIndex((stringIndex + 1) % strings.length);
        }
      }, 2000); // delay before moving to next string
      return () => clearTimeout(timeout);
    }
  }, [wordIndex, stringIndex, strings, wordDelay, loop]);

  return <span>{text}&nbsp;<span className="blinking-cursor">|</span></span>;
};

export default WordTyped;
