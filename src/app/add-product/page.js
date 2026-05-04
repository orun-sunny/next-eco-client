"use client";

import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Save, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AddProduct() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    imageUrl: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price)
        }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Product added successfully!" });
        setFormData({ title: "", shortDescription: "", fullDescription: "", price: "", imageUrl: "" });
        setTimeout(() => router.push("/manage-products"), 2000);
      } else {
        setMessage({ type: "error", text: "Failed to add product. Is the backend running?" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error. Make sure the backend is running on port 5000." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading) {
    return <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Add New <span className="text-gradient">Product</span></h1>
        <p style={{ color: '#94a3b8' }}>Create a new product listing in your store.</p>
      </div>

      {message && (
        <div style={{ 
          padding: '1rem', 
          marginBottom: '2rem', 
          borderRadius: '0.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          background: message.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          color: message.type === 'success' ? 'var(--success)' : 'var(--error)',
          border: `1px solid ${message.type === 'success' ? 'var(--success)' : 'var(--error)'}`
        }}>
          {message.type === 'success' ? <CheckCircle2 /> : <AlertCircle />}
          {message.text}
        </div>
      )}

      <div className="card" style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="title">Product Title *</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                required 
                placeholder="e.g. Wireless Noise-Cancelling Headphones" 
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="price">Price ($) *</label>
              <input 
                type="number" 
                id="price" 
                name="price" 
                min="0" 
                step="0.01" 
                value={formData.price} 
                onChange={handleChange} 
                required 
                placeholder="0.00" 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="shortDescription">Short Description *</label>
            <input 
              type="text" 
              id="shortDescription" 
              name="shortDescription" 
              value={formData.shortDescription} 
              onChange={handleChange} 
              required 
              maxLength="100"
              placeholder="A brief 1-line summary (max 100 characters)" 
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="fullDescription">Full Description *</label>
            <textarea 
              id="fullDescription" 
              name="fullDescription" 
              value={formData.fullDescription} 
              onChange={handleChange} 
              required 
              rows="5"
              placeholder="Provide a detailed description of the product..." 
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="imageUrl">Image URL *</label>
            <input 
              type="url" 
              id="imageUrl" 
              name="imageUrl" 
              value={formData.imageUrl} 
              onChange={handleChange} 
              required 
              placeholder="https://example.com/image.jpg" 
            />
            {formData.imageUrl && (
              <div style={{ marginTop: '1rem', borderRadius: '0.5rem', overflow: 'hidden', height: '200px', border: '1px solid var(--border)' }}>
                <img src={formData.imageUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
            <button type="button" onClick={() => router.back()} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : <><Save size={20} /> Add Product</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
