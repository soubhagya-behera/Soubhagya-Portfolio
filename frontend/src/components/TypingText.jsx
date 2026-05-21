import { useEffect, useState } from 'react';

function TypingText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const delay = deleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 900);
        return;
      }

      if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setText((value) =>
        deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [deleting, text, wordIndex, words]);

  return (
    <span className="text-cyanGlow transition-all duration-300">
      {text}
      <span className="ml-1 animate-pulse font-light text-cyanGlow">|</span>
    </span>
  );
}

export default TypingText;
