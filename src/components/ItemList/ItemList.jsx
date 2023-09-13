import { useContext } from "react"
import Item from "../Item/Item"
import Filter from "../Patrones/Filter/Filter"

const productsFiltered = ({ products, filterState, handleFilterChange }) => (
    
        <>
            <div className="w-25">
                <label>Ingrese el producto que quiere buscar</label>            
                <input className="" type="text" value='' onChange={handleFilterChange} />
            </div>
            <h1>Productos</h1>
            { 
                filterState === '' ? 
                    products.map(product => <Item key={product.id} product={product} /> )  
                : 
                    products
                        .filter(product => product.name.toLowerCase().includes(filterState.toLowerCase()))
                        .map(product => <Item key={product.id} product={product} /> )  
            }
            
        </>

)

const ItemList = ({products}) => {

    const {products} = useContext(contextApp) //Tengo que pasar como parametro el contexto que quiero que use

    return (            
        <>
            
            {/* { products.map(product => <Item key={product.id} product={product} /> ) } */}
            <Filter products={products}>
                { productsFiltered }
            </Filter>
        </>
    )
}

export default ItemList