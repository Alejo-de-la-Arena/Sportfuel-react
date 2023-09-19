import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"
import ItemCount from "./counter/ItemCount"
import { Link } from "react-router-dom"
import '../ItemDetail.css'


const ItemDetail = ({product}) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
        addProduct( {...product, quantity } )
        setIsCounter(false)
    }
    return (
        <div className="container-detail">
            <h2>Detail View</h2>
            <div className="div-img">
                <img className="product-img" src={product.imageUrl} alt="imagen" />
                <div className="div-info">
                    <p>Name: {product.name}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                </div>
            </div>
            <div className="counter-detail-flex">
                {
                    isCounter ? 
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                    :
                        <>
                            <Link to={'/cart'}>
                                <button className="btn-detail-cart">Go to Cart</button>
                            </Link>
                            <br /> 
                            <Link to={'/ItemListContainer'}>
                                <button className="btn-detail-cart">Go to Home</button>
                            </Link>
                        </>
                }
            </div>
        </div>
    )
}

export default ItemDetail

