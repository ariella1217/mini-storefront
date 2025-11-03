'use client';

export default function ProductCard({ product, onAddToCart }) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-1">Category: {product.category}</p>
      <p className="text-xl font-bold text-blue-600 mb-2">${product.price}</p>
      <p className={`text-sm mb-3 ${isOutOfStock ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>
        {isOutOfStock ? 'Out of Stock' : `Stock: ${product.stock}`}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        disabled={isOutOfStock}
        className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
          isOutOfStock
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
}