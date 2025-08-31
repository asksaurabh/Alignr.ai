export const MODAL_ANIMATIONS = {
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  modal: {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
    transition: { type: "spring", duration: 0.3 }
  }
};

export const MODAL_SIZES = {
  small: 'max-w-md',
  medium: 'max-w-2xl',
  large: 'max-w-4xl',
  extraLarge: 'max-w-6xl'
};

export const MODAL_Z_INDEX = {
  backdrop: 'z-40',
  modal: 'z-50'
};
