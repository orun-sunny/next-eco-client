"use client";

import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

export default function AddToCartButton() {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      onClick={handleAddToCart} 
      className={`btn ${added ? 'btn-secondary' : 'btn-primary'}`} 
      style={{ flex: '1', padding: '1rem', fontSize: '1.125rem' }}
    >
      {added ? (
        <><Check size={20} color="var(--success)" /> Added to Cart!</>
      ) : (
        <><ShoppingCart size={20} /> Add to Cart</>
      )}
    </button>
  );
}
