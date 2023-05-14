import { createContext, useEffect, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({children})=>{
    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0);

    // ProductDetail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail= () => setIsProductDetailOpen(true)
    const closeProductDetail= () => setIsProductDetailOpen(false)

    // ProductDetail · Open/Close
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart · Add products to cart
    const [cartProducts, setcartProducts] = useState([]);

    // CheckouSideMenu · Open/Close
    const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setisCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu= () => setisCheckoutSideMenuOpen(false)

    // Shopping Cart · Order 
    const [order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState(null);  

    // Filter
    
    // Get product by title
    const [searchByTitle, setSearchByTitle] = useState(null);  
    
    // Get product by category
    const [searchByCategory, setSearchByCategory] = useState(null);  
    const [filteredItems, setfilteredItems] = useState([]); 

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])
    
    const filteredItemsByTitle = ( items, searchByTitle )=>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = ( items, searchByCategory )=>{
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory)=>{
        if(searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items,searchByTitle)
        }
        if(searchType === 'BY_CATEGORY'){ 
           return filteredItemsByCategory(items,searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY'){ 
            return filteredItemsByCategory(items,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        return items
        
    }

    useEffect(()=>{
      if(searchByTitle && searchByCategory) setfilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
      if(searchByTitle && !searchByCategory) setfilteredItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))
      if(!searchByTitle && searchByCategory) setfilteredItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
      if(!searchByTitle && !searchByCategory) setfilteredItems(filterBy(null,items,searchByTitle,searchByCategory))
    }, [items ,searchByTitle , searchByCategory])



    return(
    <ShoppingCardContext.Provider value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setcartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle, 
        setSearchByTitle,
        filteredItems,
        setfilteredItems,
        searchByCategory, 
        setSearchByCategory,
    }}>
        {children}
    </ShoppingCardContext.Provider>
    )
}