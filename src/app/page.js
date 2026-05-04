import Link from "next/link";
import { ArrowRight, Zap, Shield, Star, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section */}
      <section style={{ position: 'relative', padding: '8rem 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'var(--primary)', filter: 'blur(150px)', opacity: '0.2', borderRadius: '50%', zIndex: '-1' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '400px', height: '400px', background: 'var(--accent)', filter: 'blur(150px)', opacity: '0.2', borderRadius: '50%', zIndex: '-1' }}></div>
        
        <div className="container" style={{ textAlign: 'center', zIndex: '1' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Elevate Your Digital <br />
            <span className="text-gradient">Experience Today</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
            Discover the most premium collection of digital tools and physical accessories designed to supercharge your workflow and lifestyle.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/products" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Shop Now <ArrowRight size={20} />
            </Link>
            <Link href="/#features" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section id="features" style={{ padding: '5rem 0', background: 'rgba(30, 41, 59, 0.3)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Why Choose <span className="text-gradient">NexusStore</span>?</h2>
            <p style={{ color: '#94a3b8', marginTop: '1rem' }}>We deliver excellence without compromise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { icon: <Zap size={32} color="var(--primary)" />, title: "Lightning Fast Delivery", desc: "Get your digital products instantly and physical items within 48 hours." },
              { icon: <Shield size={32} color="var(--accent)" />, title: "Secure Checkout", desc: "Your payment information is encrypted and processed with bank-level security." },
              { icon: <Star size={32} color="#f59e0b" />, title: "Premium Quality", desc: "Every item in our store is hand-picked and verified for exceptional quality." }
            ].map((feature, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: '#94a3b8' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Popular Items Preview Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Trending <span className="text-gradient">Products</span></h2>
            <Link href="/products" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-3">
            {/* Hardcoded preview for landing page */}
            {[
              { id: "1", title: "Wireless Headphones", price: 199.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", desc: "High quality wireless headphones" },
              { id: "2", title: "Mechanical Keyboard", price: 129.99, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800", desc: "RGB mechanical keyboard" },
              { id: "3", title: "Smart Watch", price: 249.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", desc: "Fitness tracking smartwatch" }
            ].map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.title} className="card-image" />
                <div className="card-content">
                  <h3 >{item.title}</h3>
                  <p style={{ color: '#94a3b8', marginBottom: '1rem', fontSize: '0.875rem' }}>{item.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)' }}>${item.price}</span>
                    <Link href={`/products/${item.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section style={{ padding: '5rem 0', background: 'rgba(30, 41, 59, 0.3)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>What Our <span className="text-gradient">Customers Say</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
            {[
              { name: "Sarah Jenkins", role: "Designer", text: "The quality of products is unmatched. The mechanical keyboard I bought completely transformed my workspace." },
              { name: "David Chen", role: "Developer", text: "Fast shipping and excellent customer service. The smart watch works flawlessly with all my devices." }
            ].map((review, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', color: '#f59e0b' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem', color: '#cbd5e1' }}>"{review.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ margin: '0', fontSize: '1rem' }}>{review.name}</h4>
                    <p style={{ margin: '0', color: '#94a3b8', fontSize: '0.875rem' }}>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, rgba(30, 41, 59, 0.9) 100%)', borderRadius: '2rem', padding: '4rem 2rem', textAlign: 'center', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%)', zIndex: '0' }}></div>
            <div style={{ position: 'relative', zIndex: '1' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Upgrade Your Gear?</h2>
              <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1.125rem' }}>
                Join thousands of satisfied customers and experience the difference today. Create an account for exclusive offers.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link href="/login" className="btn btn-primary">Sign Up Free</Link>
                <Link href="/products" className="btn btn-secondary">Browse Store</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
