import Layout from "../../Components/Layout";
import { ShoppingCardContext } from "../../Context";
import { useContext } from 'react';
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";


export default function MyOrder() {
  const context = useContext(ShoppingCardContext);
  const currentPath = window.location.pathname
  const index_lastdiagonal = currentPath.lastIndexOf('/') + 1
  let index = currentPath.substring(index_lastdiagonal)
  if(index==='last') index = context.order?.length - 1;
  return (
      <Layout>
        <div className="flex justify-center items-center relative w-80">
          <Link to={`/my-orders`} className="absolute left-0">
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'></ChevronLeftIcon>
          </Link>
          <h1> My Order </h1>
        </div>
        <div className='flex flex-col w-80'>
          {
              context.order?.[index]?.products.map((product)=>  
                <OrderCard
                  key = {product.id} 
                  id = {product.id}
                  imageUrl={product.images}
                  price ={product.price}
                  title ={product.title}/>
              )
          }
        </div>
      </Layout>
    )
  }