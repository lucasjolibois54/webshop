import React from 'react'
import { addCart, delCart } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'

function Cart() {

  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDelete = (item) => {
    dispatch(delCart(item));
  };

  const getCartTotal = () => {
    let total = 0;
    for (let idx = 0; idx < state.length; idx++){
      total += state[idx].qty * state[idx].price
    }
    return total;
  }

  const emptyCart = () => {
    return (
      <div>

        <h2>Empty Cart</h2>

      </div>
    )
  }

  const cartItems = (product) => {
    return (
      <div>
        <h2>{product.title}</h2>
        <p>{product.qty * product.price}</p>
      </div>
    )
  }



  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      <h1>{ getCartTotal() }.- DKK</h1>
    </div>
  )
}

export default Cart