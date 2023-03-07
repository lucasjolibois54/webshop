import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
    <Link to="/cart" className='underline text-red-800 italic font-normal'>cart</Link>
    <Outlet/>
    </>
  )
}

export default Nav