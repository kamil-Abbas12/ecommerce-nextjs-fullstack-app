"use client"
import Stripe from "stripe"
import { ProductCard } from "./product-card";
import { useState } from "react";
interface Props {
    products: Stripe.Product[];
}
export const ProductsList =({products}:Props)=>{
    const[searchTerm , setSearchTerm] = useState<string>(" ")
    const filteredProduct = products.filter((product)=>{
        const term = searchTerm.toLocaleLowerCase()
        const nameMatch = product.name.toLowerCase().includes(term)
        const descriptionMatch = product.description? product.description.toLowerCase().includes(term):false
        return nameMatch || descriptionMatch
    })
return (
<div>
    <div className="mb-6 flex justify-center bg-white text-black ">
        <input
         type="text"
        value={searchTerm} 
        onChange={(e)=>setSearchTerm(e.target.value)}
         placeholder="Search products..." 
        className="w-full max-w-md rounded border text-gray-800 border-gray-300 px-4 py-2 focus:outlined-none focus:ring-2 focus:ring-blue-400"
         />
    </div>
    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        { filteredProduct.map((product,key) =>{
return <li key={key}>
    <ProductCard product={product}/>
</li>
    }
)}</ul>
</div>
);
}