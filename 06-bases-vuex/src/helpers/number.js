export const generateRandomNumber = (from = 0, to = 10) => {
  return new Promise((resolve) => {
    const randomNumber = Math.floor(Math.random() * (to - from + 1) + from);
    setTimeout(() => {
      resolve(randomNumber);
    }, 2000);
  });
};
