import { memo } from "react"
import Filter from "../../Filter/Filter"
import Item from "./Item/Item"
import '../ItemListContainer.css'

const ItemList = memo( ({ products }) => { 
        return (
            <>
                {
                    products.map(product =>  <Item key={product.id} product={product} /> )
                }
            </>
        )
    }
) 

export default ItemList