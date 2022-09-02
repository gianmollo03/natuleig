export const CustomFetch = (productos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    });
  });
};
