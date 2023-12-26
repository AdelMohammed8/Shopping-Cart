import StoreItems from "../data/items.json"
import {Row ,Col} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
export function Store(){
    return(
        <>
        <h1>store</h1>
        <Row xs={1} md={2} lg={3} className="g-3">
            {StoreItems.map((item)=>{
                return(
                    <Col key={item.id}><StoreItem {...item}/></Col>
                )
            })}
            
        </Row>
        </>
        
    )
}


