import {Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home"
import {Container} from "react-bootstrap"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
export function App(){
    return (
        <ShoppingCartProvider>
        <Navbar/>
        <Container className="mb-4">
           
             <Routes>
            <Route path="/" element={<Store/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Home" element={<Home/>}/>
        </Routes>

        </Container>
        </ShoppingCartProvider>
       
        
    )
}