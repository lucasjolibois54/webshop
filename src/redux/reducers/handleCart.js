const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  const exist = state.find((x) => x.id === product.id);

  switch (action.type) {
    case "ADDITEM":
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
