"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {ShoppingCartIcon,Bars3Icon,XMarkIcon  } from "@heroicons/react/24/outline"
import { useCartStore } from '@/store/cart-store'
import { Button } from './ui/button'
export const Navbar = () => {
  const [mobileOpen , setMobileOpen] = useState<boolean>(false);
  const {items} = useCartStore()
  const cartCount = items.reduce((acc,item) => acc + item.quantity , 0)
  useEffect(() => {
    const handleResize = ()=>{
      if(window.innerWidth>768){
        
        setMobileOpen(false)
      }
  }
  window.addEventListener("resize",handleResize)
  return ()=>{
  window.addEventListener("resize",handleResize)

  }
  }, [])
  
  return (
  <nav className="sticky top-0 z-50 bg-white shadow">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between ">
    <Link href="/" className="  hover:text-blue-600 ">
      My Ecommerce
    </Link>

    <div className="hidden md:flex space-x-6 ">
      <Link href="/" className="">Home</Link>
      <Link href="/products" className="hover:text-blue-600 ">Products</Link>
      <Link href="/checkout" className="hover:text-blue-600 ">Checkout</Link>
    </div>

    <div className="flex items-center space-x-4">
      <Link className='relative'
       href="/checkout">
      <ShoppingCartIcon className='h-6 w-6'/>
{
  cartCount > 0 &&  (  <span className='absolute  -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>{cartCount} </span>)}
    </Link>
    <Button variant="ghost"
    className='md:hidden'
    onClick={()=>setMobileOpen((prev) => !prev)}>
      {mobileOpen ? (<XMarkIcon className='w-6 h-6'/>): 
      <Bars3Icon className='w-6 h-6'/>}
    </Button>
    </div>
  </div>
  {
    mobileOpen && ( <nav className='md:hidden bg-white shadow-md'> <ul className='flex flex-col p-4 space-y-2'>
      <li><Link href="/" className="block hover:text-blue-600">Home</Link></li>
      <li><Link href="/products"  className="block hover:text-blue-600" >Products</Link></li>
      <li><Link href="/checkout" className="block hover:text-blue-600">Checkout</Link></li>
      </ul>
   </nav>
      )}
    </nav>
  );
};


export default Navbar
