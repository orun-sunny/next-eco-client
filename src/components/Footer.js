"use client";

import { ShoppingBag, Globe, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: 'var(--secondary)', borderTop: '1px solid var(--border)', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div className="grid grid-cols-4 md:grid-cols-4" style={{ gap: '2rem', marginBottom: '3rem' }}>
          
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}>
              <ShoppingBag color="var(--primary)" />
              <span>Nexus<span className="text-gradient">Store</span></span>
            </Link>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
              The ultimate destination for premium digital and physical products. Elevate your lifestyle with our curated collection.
            </p>
            <div style={{ display: 'flex', gap: '1rem', color: '#94a3b8' }}>
              <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}><Globe size={20} /></a>
              <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}><MessageCircle size={20} /></a>
              <a href="#" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--foreground)', marginBottom: '1rem' }}>Products</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94a3b8' }}>
              <li><Link href="/products" style={{ transition: 'color 0.2s' }}>All Products</Link></li>
              <li><Link href="/products?category=electronics" style={{ transition: 'color 0.2s' }}>Electronics</Link></li>
              <li><Link href="/products?category=accessories" style={{ transition: 'color 0.2s' }}>Accessories</Link></li>
              <li><Link href="/products?category=software" style={{ transition: 'color 0.2s' }}>Software</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--foreground)', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94a3b8' }}>
              <li><Link href="/#about" style={{ transition: 'color 0.2s' }}>About Us</Link></li>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>Careers</Link></li>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>Blog</Link></li>
              <li><Link href="/#contact" style={{ transition: 'color 0.2s' }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--foreground)', marginBottom: '1rem' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94a3b8' }}>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>Terms of Service</Link></li>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>Privacy Policy</Link></li>
              <li><Link href="#" style={{ transition: 'color 0.2s' }}>Refund Policy</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.875rem' }}>
          <p>&copy; {new Date().getFullYear()} NexusStore. All rights reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </footer>
  );
}
