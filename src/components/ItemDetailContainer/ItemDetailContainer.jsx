import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../data/mockFetch"
import ItemDetail from "./ItemDetail/ItemDetail"


const ItemDetialContainer = () => {
    const [product, setProduct ] = useState({})
    const { pid } = useParams()
    console.log(pid)

    useEffect(()=>{
        mFetch(pid)
        .then(resp => setProduct(resp))
        .catch(err=> console.log(err))
    },[])

    return (
        <div>            
            <ItemDetail product={product} />           
        </div>
    )
}

export default ItemDetialContainer