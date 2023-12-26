  
import { Offcanvas ,Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import { FormatCurrency } from "../utilities/FormatCurrency"
import StoreItems from "../data/items.json";
type ShoppingCartProps = {
  isOpen:boolean
}

  export function ShoppingCart({isOpen}:ShoppingCartProps){
    const {closeCart,cartItems} = useShoppingCart()
    return(
      <Offcanvas placement="end" show={isOpen} onHide={closeCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            adel
          </Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3} >
            {cartItems.map((item)=>{
              return(
                <CartItem key={item.id} {...item}/>
              )
            })}

         
          <div className="ms-auto fw-bold fs-5">
            Total{""}
             {FormatCurrency(cartItems.reduce((total,cartitem)=>{
             const item = StoreItems.find((item)=>item.id === cartitem.id)
             return total+(item?.price||0) * cartitem.quantity
            },0)
            )}
             </div>
             </Stack>
        </Offcanvas.Body>
      </Offcanvas>
     
    )
  }