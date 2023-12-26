import { Button, Card } from "react-bootstrap";
import { FormatCurrency } from "../utilities/FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemsProps = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

export function StoreItem({ id, name, imgUrl, price }: StoreItemsProps) {
  const {getItemQuantity,decreaseCartQuantity,increaseCartQuantity,removeFromCart} = useShoppingCart() 
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        height="200px"
        variant="top"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className=" d-flex flex-column">
        <Card.Title className="d-flex align-item-base-line justify-content-between mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto ">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=>increaseCartQuantity(id)}>Add To Cart</Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: ".5rem" }}
            >
              <div className="d-flex align-items-center justify-content-center "
               style={{ gap: ".5rem" }}>
                <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>in cart 
                </div>
                <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm" className=" w-100 " onClick={()=>removeFromCart(id)}>Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
