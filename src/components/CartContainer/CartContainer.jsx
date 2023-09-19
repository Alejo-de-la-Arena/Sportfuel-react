import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {

    const { cartList, deleteCart } = useCartContext()

    return (
        <div>
            {cartList.map(prod => <div key={prod.id}>
                <img src={prod.imageUrl} />
                {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
                <button onClick={() => eliminarProducto(prod.id)}> X </button>
            </div>)}
            <button onClick={deleteCart}>Vaciar Carrito</button>
            <h3>Total Price: {precioTotal()}</h3>
        </div>
    )
}

export default CartContainer