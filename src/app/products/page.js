import Link from "next/link";
import { Search, Filter } from "lucide-react";

async function getProducts() {
  try {
    const res = await fetch('http://localhost:5000/api/products', { cache: 'no-store' });
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log("Backend not reachable, using fallback data");
  }
  
  // Fallback data if backend is not running
  return [
    { id: "1", title: "Wireless Headphones", shortDescription: "High quality wireless headphones", price: 199.99, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" },
    { id: "2", title: "Mechanical Keyboard", shortDescription: "RGB mechanical keyboard", price: 129.99, imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800" },
    { id: "3", title: "Smart Watch", shortDescription: "Fitness tracking smartwatch", price: 249.99, imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" },
    { id: "4", title: "Laptop Stand", shortDescription: "Ergonomic aluminum laptop stand", price: 45.00, imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800" },
    { id: "5", title: "USB-C Hub", shortDescription: "7-in-1 USB-C Hub", price: 35.99, imageUrl: "https://images.unsplash.com/photo-1616422285623-14ff04753ba0?auto=format&fit=crop&q=80&w=800" },
    { id: "6", title: "Gaming Mouse", shortDescription: "Ergonomic high-DPI gaming mouse", price: 59.99, imageUrl: "https://images.unsplash.com/photo-1527814050087-379381547969?auto=format&fit=crop&q=80&w=800" }
  ];
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>All <span className="text-gradient">Products</span></h1>
        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
          Browse our extensive collection of premium items. Find exactly what you need to upgrade your setup.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem', background: 'var(--card-bg)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
        <div style={{ flex: '1', minWidth: '250px', position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input type="text" placeholder="Search products..." style={{ paddingLeft: '3rem', background: 'var(--secondary)' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <select style={{ minWidth: '150px' }}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
          </select>
          <button className="btn btn-secondary">
            <Filter size={20} /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.imageUrl} alt={product.title} className="card-image" />
            <div className="card-content">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.title}</h3>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.875rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {product.shortDescription}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>${product.price}</span>
                <Link href={`/products/${product.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
