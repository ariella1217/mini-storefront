'use client';

import { useState, useEffect } from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1500);
  const [cart, setCart] = useState([]);

  // Fetch products on initial load
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Simulate inventory count changes with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setProducts((prevProducts) =>
        prevProducts.map((product) => {
          // Randomly adjust stock: increase or decrease by 0-2 items
          const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
          const newStock = Math.max(0, Math.min(20, product.stock + change));
          return { ...product, stock: newStock };
        })
      );
    }, 5000); // Update every 5 seconds

    // Cleanup: stop interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // Filter products based on category and price
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  // Add to cart handler
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Decrement item in cart
  const handleDecrement = (productId) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productId);
      if (existing.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  // Reset cart
  const handleResetCart = () => {
    setCart([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Mini Storefront</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Section */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Filters</h2>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <PriceFilter
              maxPrice={maxPrice}
              onMaxPriceChange={setMaxPrice}
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="lg:col-span-2">
          <StatusMessage
            loading={loading}
            error={error}
            isEmpty={!loading && !error && filteredProducts.length === 0}
          />
          {!loading && !error && filteredProducts.length > 0 && (
            <ProductList
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          )}
        </div>

        {/* Cart Section */}
        <div className="lg:col-span-1">
          <CartSummary
            cart={cart}
            onDecrement={handleDecrement}
            onReset={handleResetCart}
          />
        </div>
      </div>
    </div>
  );
}