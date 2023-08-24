import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const ProductPage = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 15 },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    return (
        <Container>
            <h1>Product Page</h1>
            <div className="products">
                {products.map(product => (
                <div key={product.id} className="product">
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <Button variant='warning' onClick={() => addToCart(product)}>Add to Cart</Button>
                </div>
                ))}
            </div>
            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {cart.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    <Button variant='danger' onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </li>
                ))}
                </ul>
            </div>
        </Container>
  );
};

export default ProductPage;