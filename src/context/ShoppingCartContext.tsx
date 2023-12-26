import { useContext, createContext, ReactNode, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
 
  openCart:()=>void
  closeCart:()=>void
  cartItems:CartItem[]
  cartQuantities:number
};
type CartItem = {
  id: number;
  quantity: number;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);
type ShoppingCartProviderProps = {
  children: ReactNode;
};
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, SetCartItems] = useLocalStorage<CartItem[]>("shoping-cart",[]);
  const [isOpen,setIsOpen]=useState(false)
 const cartQuantities = cartItems.reduce((quantity,item)=>{
    return item.quantity+quantity

 },0)
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    SetCartItems((CartItem) => {
      if (CartItem.find((item) => item.id === id) == null) {
        return [...CartItem,{ id, quantity: 1 }];
      } else {
         return CartItem.map((item) => {
          if (item.id === id) {
            return {...item,quantity:item.quantity+1}
          }else{
            return item
          }
         
        });
      }
      
    });
  }
  function decreaseCartQuantity(id:number){
    SetCartItems(cartitem =>{
        if(cartitem.find((item)=>item.id === id)?.quantity===1){
            return cartitem.filter((item)=>item.id !== id)
        }else{
            return cartitem.map((item)=>{
                if(item.id === id){
                    return {...item,quantity:item.quantity-1}
                }else{
                    return item
                }
            })
        }
    })
  }
  function removeFromCart(id:number){
    SetCartItems(cartitem=>{
        return cartitem.filter((item)=>item.id !== id)
    })
  }
  const openCart = ()=>setIsOpen(true)
  const closeCart = () =>setIsOpen(false)
  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseCartQuantity 
        ,decreaseCartQuantity,removeFromCart,cartQuantities,closeCart,openCart,cartItems}}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
