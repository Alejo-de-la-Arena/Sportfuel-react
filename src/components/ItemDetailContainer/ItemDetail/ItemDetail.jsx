import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import ItemCount from "./counter/ItemCount";
import { Link } from "react-router-dom";
import { Loading } from "../../../Loading/Loading";
import '../ItemDetail.css';

const ItemDetail = ({ product }) => {
    const [isCounter, setIsCounter] = useState(true);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        addProduct({ ...product, quantity });
        setIsCounter(false);
    };

    return (
        <>
            <Loading />
            <div className="container-detail">
                <h2>Product Detail</h2>
                <div className="div-flex">
                    <img className="product-img" src={product.imageUrl} alt="imagen" />
                    <div className="div-info">
                        <p>Name: <strong>{product.name}</strong></p>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Type: {product.type}</p>
                    </div>
                    <div>
                        {isCounter ?
                            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                            :
                            <>
                                <div className="counter-btn">
                                    <Link to='/Cart'>
                                        <button className="btn-detail-cart">Go to cart</button>
                                    </Link>
                                    <Link to='/ItemListContainer'>
                                        <button className="btn-detail-cart">Go back to Products</button>
                                    </Link>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
