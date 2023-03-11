export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
