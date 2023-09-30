import { useEffect, useState } from "react"
import { mFetch } from "../data/mockFetch"
import ItemList from "./ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Loading } from "../../Loading/Loading"


const ItemListContainer = () => { 
    const [products, setProducts] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    // evento props estado ??? 
    const { cid } = useParams()

    console.log(cid)

    useEffect(()=>{
        if (cid) {
            // const db =getFireStore
            // const queryCollection = collection(db, 'products')
            // const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) 
            // : queryCollection
            // getDocs(queryFilter)
            // .then(resp => setProducts(resp.docs.map(prod => ( {id: prod.id, ...prod.data() } ))))
            // .catch(err => console.log(err))
            // .finally(() => setLoading(false))
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
    // const handleAddProduct = () => {
    //     setProducts([
    //         ...products,
    //         {id: products.length + 1, name: 'Producto de prueba', price: 1500, description: 'lorem asdfas asdf asdf '}
    //     ])
    // }

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