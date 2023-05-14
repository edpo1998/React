import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import { useState, useEffect } from "react";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCardContext } from "../../Context";
import { useContext } from 'react';
export default function Home() {
  const context = useContext(ShoppingCardContext)
   const renderView = ()=>{
    return (
    context.filteredItems?.length>0 ?
    context.filteredItems?.map(item =>(<Card key={item.id} data={item}/>)):
    <div>No se encontraron articulos</div>
    )
   }
  return (
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl"> Exclusive Products </h1>
        </div>
        <input 
          type="text" 
          placeholder="Search Product"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event)=> context.setSearchByTitle(event.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            renderView()
          }
        </div>
        <ProductDetail></ProductDetail>
      </Layout>
    )
  }