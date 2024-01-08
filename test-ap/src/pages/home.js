import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop"
        );
        const data = await response.json();

        console.log("Data from API:", data);

        if (Array.isArray(data)) {
          setProducts(data);
          setLoading(false);
        } else {
          console.error("Invalid data format from API");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, products]);

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        The E-Commerce Store
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products here..."
          className="p-2 w-full border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <p>Loading!?!</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {Array.isArray(searchResults) && searchResults.length > 0 ? (
              searchResults.map((product) => (
                <li key={product.id} className="bg-white p-4 rounded shadow">
                  <h2 className="text-lg font-bold mb-2">
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h2>
                  <p className="text-gray-700">{product.description}</p>

                  <p className="mt-2">Price: ${product.price}</p>
                  <p
                    className={`text-red-600 mt-2 ${
                      product.price !== product.discountedPrice
                        ? "discounted-price"
                        : ""
                    }`}
                  >
                    New price: ${product.discountedPrice}
                  </p>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="mt-4 mx-auto max-w-full h-auto"
                  />
                </li>
              ))
            ) : (
              <p>No matching products</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
