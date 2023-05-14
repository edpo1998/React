import { NavLink } from "react-router-dom";
import { ShoppingCardContext } from "../../Context";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
const NavBar = () =>{
    const context = useContext(ShoppingCardContext)
    const activeStyle ="underline underline-offset-4"
    return (
        <nav className="flex justify-between top-0 items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                      to="/"
                    > Edpo </NavLink>
                </li>
                <li>
                    <NavLink
                      to="/"
                      className={({isActive})=> isActive? activeStyle: undefined}
                      onClick={()=> context.setSearchByCategory()}
                    > All </NavLink>
                </li>
                <li>
                    <NavLink
                      to="/clothes"
                      onClick={()=> context.setSearchByCategory('clothes')}
                    > Clothes </NavLink>
                </li><li>
                    <NavLink
                      to="/electronics"
                      onClick={()=> context.setSearchByCategory('electronics')}
                    > Electronics </NavLink>
                </li><li>
                    <NavLink
                      to="/furnitures"
                      onClick={()=> context.setSearchByCategory('Furniture')}
                    > Furnitures </NavLink>
                </li><li>
                    <NavLink
                      to="/toys"
                      onClick={()=> context.setSearchByCategory('toys')}
                    > Toys </NavLink>
                </li><li>
                    <NavLink
                      to="/others"
                      onClick={()=> context.setSearchByCategory('others')}
                    > Others </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    errick.poron@gmail.com
                </li>
                <li>
                    <NavLink
                      to="/my-orders"
                      className={({isActive})=> isActive? activeStyle: undefined}
                    > My Orders </NavLink>
                </li>

                <li>
                    <NavLink
                      to="/my-account"
                      className={({isActive})=> isActive? activeStyle: undefined}
                    > My Account </NavLink>
                </li>
                <li>
                    <NavLink
                      to="/sign-in"
                      className={({isActive})=> isActive? activeStyle: undefined}
                    > Sign In </NavLink>
                </li>
                <li className="flex justify-center items-center"> 
                    <ShoppingCartIcon  className='h-6 w-6 text-black'></ShoppingCartIcon> 
                    <div>
                      {context.cartProducts.length}
                    </div>
                </li>
               
            </ul>
        </nav>
    )
}

export default NavBar