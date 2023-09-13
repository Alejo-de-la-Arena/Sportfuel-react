import { useContext } from "react"

import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (

        <div className="">
            <div className="">
                <img className="" src={product.imageUrl} alt="imagen prenda"/>
                <p>Nombre: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Precio: {product.price}</p>
            </div>
            <div className="">
                <Link to={`/detalle/${product.id}`}>
                    <button className="">Detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item