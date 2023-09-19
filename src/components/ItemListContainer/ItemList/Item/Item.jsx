import { memo } from "react"
import { Link } from "react-router-dom"
import '../../ItemListContainer.css'

const Item = memo(({product}) => {
    return (
        <div className="container-products">
            <div className="product-inf">
                <img className="img-product" src={product.imageUrl} alt="imagen prenda"/>
                <p>Name: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <p>Type: {product.type} </p>
                <p>Size: {product.size}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${product.id}`}>
                    <button className="btn-detail">Detail</button>
                </Link>
            </div>
        </div>
    )
})

export default Item