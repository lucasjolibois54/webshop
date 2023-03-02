import React from 'react'
import Nav from '../Components/Nav'
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'


function Home() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
       fetch('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setproducts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
  return (
    <>
    <Nav/>
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
                return (
                    <div className="product-card" key={product.title}>

                    <Link to="/product-page" className="group">
                        <div className="aspect-w-1 aspect-h-1 h-96 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img src={product.filename} alt={product.title} className="h-96 w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">DKK.{product.price}</p>
                    </Link>   
                    </div>
                );
            })}

        </div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Home

