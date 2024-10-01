import React, { useState } from 'react';

const Product = () => {
  const [cart, setCart] = useState([]);
  const [showDetails, setShowDetails] = useState({}); // State to manage visibility of product details

  const products = [
    {
      id: 1,
      name: 'Smartphone X',
      price: 799,
      description: 'The latest Smartphone X with an edge-to-edge display and AI-powered camera.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 2,    
      name: 'Laptop Pro',
      price: 1199,
      description: 'High-performance laptop with 16GB RAM and 512GB SSD.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 199,
      description: 'Noise-cancelling wireless headphones with 30-hour battery life.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 4,
      name: 'Smartwatch S',
      price: 299,
      description: 'Feature-packed smartwatch with heart rate monitoring and GPS.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 5,
      name: 'Tablet M',
      price: 599,
      description: 'Large screen tablet with stylus support for productivity and creativity.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 6,
      name: '4K Smart TV',
      price: 999,
      description: 'Ultra HD 4K Smart TV with HDR10 and Dolby Vision support.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 7,
      name: 'Gaming Console Z',
      price: 499,
      description: 'Next-gen gaming console with immersive graphics and fast load times.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 8,
      name: 'Bluetooth Speaker',
      price: 149,
      description: 'Portable Bluetooth speaker with deep bass and 12-hour battery life.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 9,
      name: 'Action Camera',
      price: 249,
      description: 'Rugged action camera with 4K video recording and waterproof body.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    },
    {
      id: 10,
      name: 'Home Security Camera',
      price: 99,
      description: 'WiFi-enabled security camera with night vision and motion detection.',
      image: 'https://artfasad.com/wp-content/uploads/2023/08/mdf-wall-design-5-300x300.jpg.webp'
    }
  ];

  // Add to Cart Function
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  // Buy Now Function
  const handleBuyNow = (product) => {
    alert(`Proceeding to buy ${product.name} for ₹${product.price}`); // Changed to INR
  };

  // Toggle Show Details Function
  const handleToggleDetails = (id) => {
    setShowDetails((prev) => ({ ...prev, [id]: !prev[id] })); // Toggle the visibility for the specific product
  };

  return (
    <div className="product-container">
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p> {/* Changed to INR */}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={() => handleBuyNow(product)} className="buy-now">Buy Now</button>
            <button onClick={() => handleToggleDetails(product.id)}>
              {showDetails[product.id] ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails[product.id] && <p className="product-description">{product.description}</p>} {/* Conditional rendering of description */}
          </div>
        ))}
      </div>

      <div className="cart-status">
        <h4>Cart</h4>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ₹{item.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Product;
