import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {

  const sr = ScrollReveal({
    distance: '30px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
  });

  return sr;
};

export default useScrollReveal;