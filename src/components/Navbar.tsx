import { Navbar as Navbar8s,Container,Nav,Button } from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import { useShoppingCart } from "../context/ShoppingCartContext"
export function Navbar(){
    const {openCart,cartQuantities} = useShoppingCart()
    return(
        <Navbar8s className="bg-white shadow-sm mb-3 " sticky="top">
            <Container   >
                <Nav className="me-auto">
                    <Nav.Link to='/Home' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                    <Nav.Link to='/' as={NavLink}>Store</Nav.Link>
                </Nav>
                {cartQuantities >0&&(
                <Button onClick={openCart} style={{width:"3rem",height:"3rem",position:"relative"}} variant="outline-primary"
                className="rounded-circle " 
                >
                    <FaShoppingCart/>
                    <div className="rounded-circle bg-danger text-white d-flex justify-content-center align-item-center"
                     style={{width:"1.5rem",height:"1.5rem",position:"absolute",transform:"translate(25%,25%)",bottom:0,right:0}}>{cartQuantities}</div>

                </Button>
                
                )}
            </Container>
        </Navbar8s>
    )
}