import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="mx-auto max-w-2xl mt-10 sm:px-6 lg:max-w-7xl lg:px-8 px-4">
      <Link to="/" className='mt-10 font-bold text-2xl'>FoodParadise</Link>
    {/* <Link to="/cart" className='mt-1 underline text-red-800 italic font-normal float-right'>cart</Link> */}
    <Link to="/cart"><img  className='mt-0 w-8 float-right' src='https://cdn-icons-png.flaticon.com/512/34/34627.png'/></Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Nav