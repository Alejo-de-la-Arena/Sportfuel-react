import React, { useContext } from "react";
import { CartContext } from "./CartContext"; 

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            <p>Nombre: {product.name}</p>
                            <p>Precio: ${product.price}</p>
                            <button onClick={() => removeFromCart(product)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            <p>Total: ${calculateTotal()}</p>
        </div>
    );
};

export default Cart;
