import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const useScrollReveal = (elements = []) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
    });

    // Применяем настройки для каждого элемента
    elements.forEach(({ selector, delay, options = {} }) => {
      sr.reveal(selector, {
        delay,
        ...options,
      });
    });
  }, [elements]);
};

export default useScrollReveal;