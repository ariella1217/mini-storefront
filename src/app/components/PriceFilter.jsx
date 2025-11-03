'use client';

export default function PriceFilter({ maxPrice, onMaxPriceChange }) {
  return (
    <div className="mb-4">
      <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
        Max Price: ${maxPrice}
      </label>
      <input
        id="price"
        type="range"
        min="0"
        max="1500"
        step="50"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>$0</span>
        <span>$1500</span>
      </div>
    </div>
  );
}