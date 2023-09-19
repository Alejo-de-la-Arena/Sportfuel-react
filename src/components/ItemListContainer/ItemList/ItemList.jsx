import { memo } from "react"
import Filter from "../../Filter/Filter"
import Item from "./Item/Item"
import '../ItemListContainer.css'

// memo(componente) -> memorizar /// memo(componente, ()=>{}) función comparadora

const ItemList = memo( ({ products }) => { 
        console.log('render de Itemlist')
        return (
            <>
                {
                    products.map(product =>  <Item key={product.id} product={product} /> )
                }
            </>
        )
    }
    // }, (propsAntesDelRender, propsDespuesDelRender)=> propsAntesDelRender.products.length === propsDespuesDelRender.products.length
) 

export default ItemList