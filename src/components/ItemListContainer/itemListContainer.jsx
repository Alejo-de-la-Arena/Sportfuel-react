import React, { useState, useEffect } from 'react';
import { MockFetch } from '../data/mockFetch';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showProducts, setShowProducts] = useState(false);

    useEffect(() => {
        MockFetch()
            .then((resolve) => {
                setProducts(resolve);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <center>
            <div>
                <button onClick={() => setShowProducts(true)}>Ver Productos</button>
                {showProducts && (
                    <div>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            products.map((product) => (
                                <div key={product.id} className=''>
                                    <div className=''>
                                        <img className='' src={product.imageUrl} alt='img' />
                                        <p>Description: {product.description}</p>
                                        <p>Precio: {product.price}</p>
                                    </div>
                                    <div>
                                        <button className=''>Detalle</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </center>
    );
};

export default ItemListContainer;