// import React from 'react';
// import { useParams } from 'react-router-dom'; // Importa useParams para obtener el ID del producto

// const ItemDetail = () => {
//     const { productId } = useParams(); // Obtiene el ID del producto de la URL
// /* Obtén el producto correspondiente usando el ID */;

//     return (
//         <div>
//             <h1>Product Detail</h1>
//             {product ? (
//                 <div>
//                     <img src={product.imageUrl} alt={product.name} />
//                     <h2>{product.name}</h2>
//                     <p>Description: {product.description}</p>
//                     <p>Price: ${product.price}</p>
//                     {/* Agrega más detalles según sea necesario */}
//                 </div>
//             ) : (
//                 <p>Producto no encontrado</p>
//             )}
//         </div>
//     );
// };

// export default ItemDetail;