

export const CartContainer = () => {
    
    const {cartList, deleteCart} = useCartContext()
    
    return (
        <div>
        {cartList.map(prod => <div key={prod.id}>
        <img src={prod.imageUrl} className="" />
        {prod.name} - ${prod.price} - Cantidad: {prod.quantity} 
        <button> X </button> 
        {/* aca agreagr para eliminar por producto */}
        
        </div>)}
            <button onClick={deleteCart}>Vaciar Carrito</button>

        </div>
    )
}
