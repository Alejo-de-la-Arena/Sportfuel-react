
import { useEffect, useState } from 'react'

export const ItemCount = () => {
    const [count, setCount] = useState(0)

    const addCount = ( ) => {
        setCount(count + 1)
    }

    const ComponentCount = inputType === 'button' ? ButtonCount : InputCount;

    const addToCart = () => {
        console.log('agregado al carrito');
    }

    

    return (
    <center>
    <label>
        <strong> {count} </strong>
    </label>
    <button onClick={addCount}> Add to cart </button>
    </center>
    )
}

