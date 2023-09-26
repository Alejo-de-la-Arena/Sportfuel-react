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
            <h2>Quantity</h2>
            <div className="count-flex"> 
                <button className="btn-counter" onClick={handleAdd}> + 1 </button>
                <label  className="num-quantity">
                    <strong>{counter}</strong> 
                </label>
                <button className="btn-counter" onClick={handleSubstract}> - 1 </button>
            </div>
            <div className="btn-add-to-cart"> 
                <button onClick={handleOnAdd}> Add to Cart </button>
            </div>
        </div>
    )
}

export default ItemCount