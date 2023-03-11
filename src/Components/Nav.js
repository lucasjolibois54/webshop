import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="mx-auto max-w-2xl mt-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className='mt-10 font-bold text-2xl'>FoodParadise</h2>
    <Link to="/cart" className='-mt-4 underline text-red-800 italic font-normal float-right'>cart</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Nav