import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="mx-auto max-w-2xl mt-10 sm:px-6 lg:max-w-7xl lg:px-8">
    <Link to="/cart" className='underline text-red-800 italic font-normal'>cart</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Nav