import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
    <Link to="/product-page" className='underline text-gray-800 italic font-normal'>Product Page</Link>
    <Outlet/>
    </>
  )
}

export default Nav