import './style.css'
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";
import { useContext } from 'react';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from "react-router-dom";
const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCardContext)

    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product=> product.id != id)
        context.setcartProducts(filteredProducts)
    }

    const handleCheckout = ()=>{
        const orderToadd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToadd])
        context.setcartProducts([])
        context.setSearchByTitle(null)

    }
    
    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                onClick={()=>context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map((product)=>
                        <OrderCard 
                        key = {product.id}
                        id = {product.id}
                        imageUrl={product.images}
                        price ={product.price}
                        title ={product.title}
                        handleDelete={handleDelete}/>
                    )
                }
            </div>
            <div className="px-6 mb-6">
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                    className='bg-black py-3 text-white w-full rounded-lg'
                    onClick={()=> handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;