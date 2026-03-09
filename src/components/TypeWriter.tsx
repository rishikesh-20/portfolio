import React, { useState, useEffect, useRef } from 'react';

interface Props {
  text: string;
  charSpeed?: number;   // ms per character, default 55
  startDelay?: number; // ms before typing begins, default 400
}

export default function TypeWriter({ text, charSpeed = 55, startDelay = 400 }: Props) {
  const [displayed, setDisplayed] = useState('');
  const [cursorDone, setCursorDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed('');
    setCursorDone(false);
    indexRef.current = 0;

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current < text.length) {
          indexRef.current += 1;
          setDisplayed(text.slice(0, indexRef.current));
        } else {
          clearInterval(interval);
          setTimeout(() => setCursorDone(true), 1500);
        }
      }, charSpeed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, charSpeed, startDelay]);

  return (
    <span>
      {displayed}
      <span className={`typewriter-cursor${cursorDone ? ' cursor-done' : ''}`} aria-hidden="true">|</span>
    </span>
  );
}
