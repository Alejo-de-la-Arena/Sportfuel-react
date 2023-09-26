import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CartContainer.css'
import { Loading } from '../../Loading/Loading'

const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [id, setId] = useState('')
    const { cartList, deleteCart, eliminarProducto, precioTotal } = useCartContext()

    const handleAddOrder = async (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(prod => {
            return { id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity }
        })
        order.total = precioTotal()

        // Insertar una orden en la base de datos
        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => setId(id))
            .catch(err => console.log(err))
            .finally(() => {
                setDataForm({
                    name: '',
                    phone: '',
                    email: ''
                })
                deleteCart()
            })
    }

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <>
        <div className='cart-container'> 
        {id !== '' && <h3>Se ha generado la orden de compra: {id}</h3>}
        {cartList.length > 0 ? (
            <div className='cart-flex'>
                {cartList.map(prod => <div key={prod.id}>
                    <img src={prod.imageUrl} className="prod-img-cart" />
                    <div className='prod-cart-info'> 
                        {prod.name} - ${prod.price} - Quantity: {prod.quantity}
                        <button className="btn-delete" onClick={() => eliminarProducto(prod.id)}> X </button>
                    </div>
                </div>)}
                <button className='btn-empty-cart' onClick={deleteCart}>Empty Cart</button>
                <h3>Total Price: <strong>{precioTotal()} </strong> </h3>
            </div>
        ) : (
            <div className='no-products-in-cart'>
                <h2>There are no products in cart</h2>
                <Link to='/ItemListContainer'>
                    <button className="btn-detail-cart">Go back to Products</button>
                </Link>
            </div>
        )}
        
        {cartList.length > 0 && (
            <form onSubmit={handleAddOrder}>
                <div className='form-container'> 
                    <input className='form-cart'
                        type='text'
                        name='name'
                        placeholder='Enter full name'
                        value={dataForm.name}
                        onChange={handleOnChange}
                    />
                    <input className='form-cart'
                        type='text'
                        name='phone'
                        placeholder='Enter phone number'
                        value={dataForm.phone}
                        onChange={handleOnChange}
                    />
                    <input className='form-cart'
                        type='text'
                        name='email'
                        placeholder='Enter email'
                        value={dataForm.email}
                        onChange={handleOnChange}
                    />
                    <button className="btn-finish">
                        Complete Order
                    </button>
                </div>
            </form>
        )}
    </div>
    </>
    )
}

export default CartContainer