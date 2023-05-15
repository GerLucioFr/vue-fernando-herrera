export const isAuthenticatedGuard = async (to, from, next) => {
  return new Promise(() => {
    const rand = Math.random() * 100;
    const flag = false;
    if (rand > 50 || flag) {
      console.log('Allow specific guard');
      next();
    } else {
      console.log('Deny specific guard');
      next(from.path);
    }
  });
};
