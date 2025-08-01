import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthDataContext } from './AuthContext.jsx';
import axios from 'axios';
import { UserDataContext } from './UserContext';

export const ShopDataContext = createContext();

function ShopContext({ children }) {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState('');
  let [showSearch, setShowSearch] = useState(false);
  let [cartItem, setCartItem] = useState({});
  let [loading, setLoading] = useState(false);

  let { userData } = useContext(UserDataContext);
  let { serverUrl } = useContext(AuthDataContext);

  let currency = '₹';
  let delivery_fee = 40;

  const getProducts = async () => {
    try {
      let result = await axios.get(`${serverUrl}api/product/list`);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

   const addtoCart = async (itemId , size) => {
       if (!size) {
      console.log("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItem); // Clone the product

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
  
    setCartItem(cartData);
    if(userData){
      try{
await axios.post(serverUrl +'api/cart/add',{itemId,size},{withCredentials:true})
      }
      catch(error){
        console.log(error);
      }
    }
   }

   const getUserCart=async()=>{
    try{
const result = await axios.post(serverUrl + 'api/cart/get',{},
  {withCredentials:true})
  setCartItem(result.data)
    }
    catch(error){
console.log(error)
    }
   }
   const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item]
          }
        } catch (error) {

        }
      }
    }
    return totalCount
  }

   const updateQuantity = async (itemId , size , quantity) => {
        let cartData = structuredClone(cartItem);
      cartData[itemId][size] = quantity
      setCartItem(cartData)
  
      if (userData) {
        try {
          await axios.post(serverUrl + "/api/cart/update", { itemId, size, quantity }, { withCredentials: true })
        } catch (error) {
          console.log(error)
          
        }
      }
        
      }

        const getCartAmount = () => {
  let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {

        }
      }
    }
    return totalAmount
    
  }


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getUserCart();
  }, []);

  let value = {
    products,
    currency,
    delivery_fee,
    getProducts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    setCartItem,
    addtoCart,
    getCartCount,
    updateQuantity,
    getCartAmount
    // loading,
    // setLoading,
  };

  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  );
}

export default ShopContext;
