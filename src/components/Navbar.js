"use client";

import { useAuth } from "../context/AuthContext";
import { ShoppingBag, User, LogOut, PlusCircle, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
// Next 13+ Link component
import NextLink from "next/link";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="glass-nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <NextLink href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <ShoppingBag color="var(--primary)" />
          <span>Nexus<span className="text-gradient">Store</span></span>
        </NextLink>

        {/* Desktop Links */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <li><NextLink href="/">Home</NextLink></li>
            <li><NextLink href="/products">Products</NextLink></li>
            <li><NextLink href="/#features">Features</NextLink></li>
            <li><NextLink href="/#about">About</NextLink></li>
            <li><NextLink href="/#contact">Contact</NextLink></li>
          </ul>
        </div>

        {/* Auth Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {user ? (
            <div className="dropdown" style={{ position: 'relative' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'var(--foreground)' }}>
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                ) : (
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={16} color="white" /></div>
                )}
                <span className="desktop-only">{user.displayName || user.email}</span>
              </button>
              <div className="dropdown-menu">
                <NextLink href="/add-product" className="dropdown-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <PlusCircle size={16} /> Add Product
                  </div>
                </NextLink>
                <NextLink href="/manage-products" className="dropdown-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Settings size={16} /> Manage Products
                  </div>
                </NextLink>
                <button onClick={() => logout()} className="dropdown-item" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '0.75rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <NextLink href="/login" className="btn btn-secondary desktop-only">Log In</NextLink>
              <NextLink href="/login" className="btn btn-primary">Sign Up</NextLink>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button className="mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'transparent', color: 'var(--foreground)', marginLeft: '1rem' }}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" style={{ padding: '1rem', background: 'var(--secondary)', borderTop: '1px solid var(--border)' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><NextLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NextLink></li>
            <li><NextLink href="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</NextLink></li>
            <li><NextLink href="/#features" onClick={() => setIsMobileMenuOpen(false)}>Features</NextLink></li>
            <li><NextLink href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</NextLink></li>
            {!user && <li><NextLink href="/login" onClick={() => setIsMobileMenuOpen(false)}>Log In</NextLink></li>}
          </ul>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
