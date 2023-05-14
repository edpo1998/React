import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyOrder from "../MyOrder";
import MyOrders  from "../MyOrders";

import NotFound from "../NotFound";
import SignIn  from "../SignIn";
import {ShoppingCardProvider}  from "../../Context";
import NavBar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/clothes', element: <Home/> },
    { path: '/electronics', element: <Home/> },
    { path: '/furnitures', element: <Home/> },
    { path: '/toys', element: <Home/> },
    { path: '/others', element: <Home/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/signin', element: <SignIn/> },
    { path: '/*', element: <NotFound/> }

  ])
  return routes
}

export default function App() {
  
  return (
    <ShoppingCardProvider>
      <BrowserRouter> 
        <NavBar/>
        <AppRoutes/>
        <CheckoutSideMenu></CheckoutSideMenu>
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}