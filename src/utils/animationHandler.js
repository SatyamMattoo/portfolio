export const inViewHandler = (inView, animation) => {
  if (inView) {
    animation.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    });
  }
};
