const debounce = (fn, delay = 400) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export { debounce };
