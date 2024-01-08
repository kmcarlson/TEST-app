import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
 const [product, setProduct] = useState(null);
 const { id } = useParams();

 useEffect(() => {
   fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
     .then((res) => res.json())
     .then((data) => setProduct(data))
     .catch((error) => console.error("Error fetching product:", error));
 }, [id]);

 return (
   <div className="container mx-auto p-4">
     {product ? (
       <div className="bg-white rounded-lg overflow-hidden shadow-lg">
         <div className="flex flex-col md:flex-row">
           <img
             className="h-96 w-full object-contain md:w-1/2"
             src={product.imageUrl}
             alt={product.title}
           />
           <div className="p-4 md:w-1/2">
             <h1 className="text-xl font-bold mb-2">{product.title}</h1>
             <p className="text-gray-600 mb-2">{product.description}</p>
             <p className="text-gray-600 mb-2">Price: ${product.price}</p>
             <p className={`text-red-600 mb-2 ${product.price !== product.discountedPrice ? 'discounted-price' : ''}`}>
              Price: ${product.discountedPrice}
             </p>
             <button
               className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
               onClick={() => addToCart(product)}
             >
               Add to cart
             </button>
           </div>
         </div>
       </div>
     ) : (
       <p>Loading...</p>
     )}
   </div>
 );
};

export default ProductDetails;
