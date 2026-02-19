import { useState, useEffect} from 'react'

function useTypewriter(words, speed = 80, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex];
    let t;
    if (!deleting && charIndex < current.length) t = setTimeout(() => setCharIndex(c => c + 1), speed);
    else if (!deleting && charIndex === current.length) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && charIndex > 0) t = setTimeout(() => setCharIndex(c => c - 1), speed / 2);
    else { setDeleting(false); setWordIndex(i => (i + 1) % words.length); }
    setDisplay(current.slice(0, charIndex));
    return () => clearTimeout(t);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);
  return display;
}

export default useTypewriter;