'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-gray-600">No products found matching your filters.</div>
      </div>
    );
  }

  return null;
}