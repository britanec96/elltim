import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const useScrollReveal = (elements = []) => {
  useEffect(() => {
    // Инициализация ScrollReveal с настройками по умолчанию
    const sr = ScrollReveal({
      distance: '30px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
    });

    // Если elements пустой, нет необходимости запускать анимации
    if (elements.length === 0) return;

    // Применяем настройки для каждого элемента
    elements.forEach(({ selector, delay = 0, options = {} }) => {
      if (selector) {
        sr.reveal(selector, {
          delay,
          ...options,
        });
      } else {
        console.error('Selector is missing for one of the elements');
      }
    });

    // Очистка ScrollReveal при размонтировании компонента
    return () => {
      sr.destroy();
    };
  }, [elements]); // Перезапуск эффекта при изменении элементов
};

export default useScrollReveal;
