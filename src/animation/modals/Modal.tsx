import posed from 'react-pose';

export const ModalAnimation = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

export const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
