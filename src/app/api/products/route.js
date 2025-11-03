// src/app/api/products/route.js

export async function GET() {
  const products = [
    { id: 'p1', name: 'Gaming Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Wireless Mouse', price: 45, category: 'Electronics', stock: 12 },
    { id: 'p3', name: 'Keyboard', price: 120, category: 'Electronics', stock: 8 },
    { id: 'p4', name: 'Office Desk', price: 350, category: 'Furniture', stock: 3 },
    { id: 'p5', name: 'Ergonomic Chair', price: 450, category: 'Furniture', stock: 6 },
    { id: 'p6', name: 'Bookshelf', price: 180, category: 'Furniture', stock: 4 },
    { id: 'p7', name: 'Sneakers', price: 85, category: 'Clothing', stock: 15 },
    { id: 'p8', name: 'Jacket', price: 120, category: 'Clothing', stock: 7 },
    { id: 'p9', name: 'Backpack', price: 60, category: 'Clothing', stock: 10 },
    { id: 'p10', name: 'Monitor', price: 400, category: 'Electronics', stock: 0 },
    { id: 'p11', name: 'Standing Desk', price: 600, category: 'Furniture', stock: 2 }
  ];
  
  return Response.json(products);
}