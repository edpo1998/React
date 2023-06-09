import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCardContext } from "../../Context";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const context = useContext(ShoppingCardContext)
    return (
      <Layout>
        <div className="flex justify-center items-center relative w-80 mb-2">
          <h1> My Orders </h1>
        </div>
        
        {
          context.order.map((order,index)=>(
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice = {order.totalPrice}
                totalProducts = {order.totalProducts}
              />
            </Link>
          ))
        }  
      </Layout>
    )
  }