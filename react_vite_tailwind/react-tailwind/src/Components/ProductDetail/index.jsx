import './style.css'
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";
import { useContext } from 'react';

const ProductDetail = () =>{
    const context = useContext(ShoppingCardContext)
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex': 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div
                onClick={()=>context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img 
                className='w-full h-full rounded-lg'
                src={context.productToShow.images} 
                alt={context.productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-medium text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail;