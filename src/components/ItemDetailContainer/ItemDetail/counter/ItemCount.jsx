import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [counter, setcounter] = useState(initial)

    const handleAdd = () => {
        if (counter < stock) setcounter(counter + 1)
    }

    const handleSubstract = (evt) => {
        console.log(evt)
        if (counter > initial) setcounter(counter - 1)
    }

    const handleOnAdd = () => onAdd(counter)

    return (
        <div className="item-count-container">
            <h2>Counter</h2>
            <button className="btn-counter" onClick={handleAdd}> + 1 </button>
            <label>
                <strong>{counter}</strong> 
            </label>
            <button
                className="btn-counter" onClick={handleSubstract}> - 1 </button>
            <button className="btn-add-to-cart" onClick={handleOnAdd}> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount