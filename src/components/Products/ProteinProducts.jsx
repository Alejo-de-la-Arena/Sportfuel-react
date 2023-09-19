import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockFetch';
import './Products.css';

const ProteinProducts = () => {
    const [expandedProduct, setExpandedProduct] = useState(null);

    const handleExpandProduct = (productId) => {
        setExpandedProduct(productId);
    };

    return (
        // <div className='products-container'>
        //     <h1>Products</h1>
        //     <ul className='products-flex'>
        //         {products.map((product) => (
        //             <li className='product-li' key={product.id}>
        //                 <img src={product.imageUrl} alt={product.name} />
        //                 <h3 className='product-name'>{product.name}</h3>
        //                 <p className='product-price'>Price: ${product.price}</p>
        //                 {expandedProduct === product.id ? (
        //                     <div className='see-more'>
        //                         <p>{product.additionalDetails}</p>
        //                         <button  onClick={() => handleExpandProduct(null)}></button>
        //                     </div>
        //                 ) : (
        //                     <Link className='btn-see-more' to={`/Products/${product.id}`} onClick={() => handleExpandProduct(product.id)}>
        //                         Details
        //                     </Link>
        //                 )}
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <>
            
        </>
    );
};

export default ProteinProducts;
