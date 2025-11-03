# Mini-Storefront

React + Next.js e-commerce app with product filtering and shopping cart.

## Setup
npm install
npm run dev
Open http://localhost:3000

## Requirements Checklist

### Components & JSX
- Uses proper JSX syntax
- Modular reusable components

### Lists & Keys
- ProductList maps products array
- Each product has unique key (product.id)

### Props & Callbacks
- Parent passes data down via props
- Children pass events up via callbacks

### State
- Uses useState for products, loading, error, filters, and cart
- Immutable state updates with spread operator

### Controlled Inputs
- CategoryFilter (select dropdown)
- PriceFilter (range slider)

### Conditional Rendering
- Loading state
- Error state
- Empty state
- Out of stock buttons disabled

### Effects & Cleanup
- Fetches products on mount
- Interval updates stock every 5 seconds
- Cleanup clears interval on unmount

### Lifting State
- All state lives in Catalog.jsx
- Passed down to child components

### Client vs Server Components
- page.js is Server Component
- Interactive components use 'use client'

### API Routes
- /api/products returns 12 products
- 3 categories (Electronics, Furniture, Clothing)

### Tailwind UI
- Responsive grid layout
- Styled cards and buttons
- Sticky filters and cart
