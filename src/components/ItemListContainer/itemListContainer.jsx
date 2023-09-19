import { useEffect, useState } from "react"
import { mFetch } from "../data/mockFetch"
import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom"

const Loading = ()=>{
    // estados y componentes hijos
    // useEffect(()=>{
        // acciones
        // return ()=>{ // clean up
        //     console.log('desmontando loading...')
        // } 
    // })

    return (
        <>
            <h2>Loading ...</h2> 
        </>
    )
}


const ItemListContainer = () => { 
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ meGusta, setMeGusta ] = useState(false)
    
    // evento props estado ??? 
    const { cid } = useParams()
    // console.log(cid)

    useEffect(()=>{
        if (cid) {
            mFetch()
            .then(respuesta => setProducts( respuesta.filter(product => cid === product.category )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        } else {            
            mFetch()
            .then(respuesta => setProducts(respuesta))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [cid])

    // función para agregar un nuevo producto
    const handleAddProduct = () => {
        setProducts([
            ...products,
            {id: products.length + 1, name: 'Producto de prueba', price: 1500, description: 'lorem asdfas asdf asdf '}
        ])
    }
    console.log('render de ItemlistContainer')
    return (
            <div className="div-products-ilc">
            { loading ? 
                    <Loading />
                :   
                    <ItemList products={products} />
            }
            </div>
    )
}

export default ItemListContainer