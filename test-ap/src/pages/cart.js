import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
 return (
 <div className="p-4">
 {cart.map((product) => (
   <div key={product.id} className="border-b p-2 my-2">
     <h2 className="font-bold text-lg">{product.title}</h2>
     <p className="text-sm text-gray-600">{product.description}</p>
     <p className="text-red-600">Price: ${product.price}</p>
     <button 
       className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" 
       onClick={() => removeFromCart(product.id)}
     >
       Delete
     </button>
   </div>
 ))}
 {cart.length > 0 && (
   <Link to="/checkoutSuccess" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-4">
     Checkout
   </Link>
 )}
 </div>
 );
};

export default Cart;
