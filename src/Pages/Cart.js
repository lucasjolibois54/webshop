import React from 'react'
import { addCart, delCart } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

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
      <>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="w-24 w-36">
              <img className="w-24 w-36 rounded-md" src={product.filename} alt={product.title}/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{product.title}<br/><span className="text-xsm font-normal text-gray-600">{product.description}</span></span>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <span className="text-center w-1/5 font-semibold text-sm">1</span>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">{product.price}.-DKK</span>
          <span className="text-center w-1/5 font-semibold text-sm">{product.price}.-DKK</span>
        </div>
      </>
    )
  }



  return (
    <div className='mx-auto max-w-2xl mt-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      {state.length === 0 && emptyCart()}
      {/* {state.length !== 0 && state.map(cartItems)} */}
      {/* <h1>{ getCartTotal() }.- DKK</h1> */}
      <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-full md:w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <div>{state.length !== 0 && state.map(cartItems)}</div>

        <Link to="/"  className="flex font-semibold text-gray-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-gray-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10 hidden md:block">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items</span>
          <span className="font-semibold text-sm">{ getCartTotal() }.- DKK</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - 10.-DKK</option>
          </select>
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{ getCartTotal()+10 }.- DKK</span>
          </div>
          <button className="bg-red-500 font-semibold hover:bg-red-600 py-3 text-sm rounded-xl text-white uppercase w-full">Checkout Unavailable</button>
        </div>
      </div>

    </div>
  </div>
  <Outlet/>
    </div>
  )
}

export default Cart