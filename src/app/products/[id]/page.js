import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

async function getProduct(id) {
  try {
    const res = await fetch(`https://next-eco-server-nine.vercel.app/api/products/${id}`, { cache: 'no-store' });
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log("Backend not reachable, using fallback data");
  }

  const fallbackProducts = [
    { id: "1", title: "Wireless Headphones", fullDescription: "Enjoy immersive sound with these premium wireless headphones. Features active noise cancellation and a 30-hour battery life.", price: 199.99, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", dateAdded: "2026-05-01T00:00:00.000Z" },
    { id: "2", title: "Mechanical Keyboard", fullDescription: "Tactile mechanical switches with customizable RGB backlighting. Perfect for typing and gaming.", price: 129.99, imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800", dateAdded: "2026-05-02T00:00:00.000Z" },
    { id: "3", title: "Smart Watch", fullDescription: "Track your health, receive notifications, and stay connected on the go with this sleek smartwatch.", price: 249.99, imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", dateAdded: "2026-05-03T00:00:00.000Z" },
    { id: "4", title: "Laptop Stand", fullDescription: "Improve your posture with this adjustable aluminum laptop stand. Compatible with all major laptops up to 15 inches.", price: 45.00, imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800", dateAdded: "2026-05-03T00:00:00.000Z" },
    { id: "5", title: "USB-C Hub", fullDescription: "Expand your connectivity with this 7-in-1 USB-C hub featuring HDMI, USB 3.0, SD card reader, and PD charging.", price: 35.99, imageUrl: "https://images.unsplash.com/photo-1616422285623-14ff04753ba0?auto=format&fit=crop&q=80&w=800", dateAdded: "2026-05-04T00:00:00.000Z" },
    { id: "6", title: "Gaming Mouse", fullDescription: "Dominate your games with this high precision optical gaming mouse featuring customizable weights and RGB.", price: 59.99, imageUrl: "https://images.unsplash.com/photo-1527814050087-379381547969?auto=format&fit=crop&q=80&w=800", dateAdded: "2026-05-04T00:00:00.000Z" }
  ];
  return fallbackProducts.find(p => p.id === id);
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <Link href="/products" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', marginBottom: '2rem', hover: { color: 'var(--primary)' } }}>
        <ArrowLeft size={20} /> Back to Products
      </Link>

      <div className="grid grid-cols-2 md:grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
        <div style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--card-bg)' }}>
          <img src={product.imageUrl} alt={product.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '1/1' }} />
        </div>

        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{product.title}</h1>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '2rem' }}>
            ${product.price}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#e2e8f0' }}>Description</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.125rem' }}>
              {product.fullDescription}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <AddToCartButton />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1' }}>
              <ShieldCheck size={24} color="var(--success)" />
              <div>
                <strong style={{ display: 'block' }}>1 Year Warranty</strong>
                <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Full coverage on parts and labor</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1' }}>
              <Truck size={24} color="var(--primary)" />
              <div>
                <strong style={{ display: 'block' }}>Free Fast Shipping</strong>
                <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Delivered within 2-3 business days</span>
              </div>
            </div>
          </div>

          {product.dateAdded && (
            <div style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#64748b' }}>
              Listed on: {new Date(product.dateAdded).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
