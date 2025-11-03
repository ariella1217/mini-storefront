'use client';

export default function CartSummary({ cart, onDecrement, onReset }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Summary</h2>
      
      {cart.length === 0 ? (
        <p className="text-gray-600 mb-4">Your cart is empty</p>
      ) : (
        <div className="mb-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
              <div className="flex-1">
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => onDecrement(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-gray-300 pt-4 mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Total Items:</span>
          <span className="font-semibold">{totalItems}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-bold text-gray-800">Total Price:</span>
          <span className="font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {cart.length > 0 && (
        <button
          onClick={onReset}
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}