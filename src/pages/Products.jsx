import React, { useState } from "react";
import { useCart } from "../context/CartContext"; 
import Checkout from "../components/Checkout"; 
import "../App.css"; 

function Products() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  
  // Track views: "shop", "cart", or "checkout"
  const [view, setView] = useState("shop");

  const categories = [
    {
      title: "Premium Laptops",
      products: [
        { id: "laptop-1", name: "MacBook Pro M3", price: 185000, displayPrice: "₹1,85,000", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnytenrofUc82GBmbSjdu2hmHoxi6lvfZxdOtPMYSzv2uGbSkwXOo51xGRzKGQoBD7-YZiDSMfgrmgBAnsTLTDj5QPA9Zh" },
        { id: "laptop-2", name: "ASUS ROG Gaming", price: 145000, displayPrice: "₹1,45,000", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMIwWML7xUWm0nHf-rZu7XAPAKAZvmj3M0ipMQs_7BI3eLQ58FlJ8wSIOHG-lx5hnFdwYLOvm4BYbLGdO82qP0I0A9vasSIQ" },
        { id: "laptop-3", name: "HP Pavilion", price: 82000, displayPrice: "₹82,000", image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef" },
        { id: "laptop-4", name: "Dell XPS", price: 110000, displayPrice: "₹1,10,000", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSSYcDEKGbRBaXz5nxjDU1LBSEUDOBaNFDuw8Sxl5PgAmv0yUN2sNhncjTVpCw5HXlmImIAGIn4yL-a5ytixPbtIbBnxyc" },
        { id: "laptop-5", name: "Lenovo Legion", price: 135000, displayPrice: "₹1,35,000", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8EcnccRYkNqZQxZ_dDJxCgI-NyJg3DVqbxp0D2bIuHnV1z7FAAb8HgDhOyPvrPK79dx2m7Oi6xuP9eY2N42QiPHcNiyrJ" },
        { id: "laptop-6", name: "Acer Predator", price: 128000, displayPrice: "₹1,28,000", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnj-IO3Jc31Fq-cwaUKX6knivaGsGG9Lo3QCIHC3OibG3vqRUKn_skuMT6BlurIvaaIdXoosHwJPaGqWz1bZpCLrGHIWzjpw" },
        { id: "laptop-7", name: "MSI Creator", price: 150000, displayPrice: "₹1,50,000", image: "https://m.media-amazon.com/images/I/71p0nLHatoL.jpg" },
        { id: "laptop-8", name: "HP Victus Gaming Laptop", price: 150000, displayPrice: "₹1,50,000", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcVqJqqG6L3uFmk4nSfphrOScuVMnhufEIbM5sMCdIVCWa9G-BkviWs34h_C0ASNqvxyU84LBxLklIw7LMczdRJGcjtjA2M42-hMigFTQFjghzgp4PC8x5_PY" },
      ],
    },
    {
      title: "Wireless Headphones & Smart Watches",
      products: [
        { id: "audio-1", name: "Sony WH-1000XM5", price: 29999, displayPrice: "₹29,999", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
        { id: "audio-2", name: "AirPods Max", price: 59999, displayPrice: "₹59,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEjinjXXZPTObOrtqp_ApbQ7_PcEQ-DbEYJE8v22vbpnKT81ZDtaBhXEh9gC0Nsok-RKR1ZAn-hDdBASX-MGLsuc58mxGN" },
        { id: "audio-3", name: "JBL Tune 760", price: 8999, displayPrice: "₹8,999", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtMB2rvRyCO7zwp4_mG3p9HF3Zkdz72mQ1iV3fhkdFtFf6RU2LhKGK2jp_IjAFQ_hWYHqzw5u9L1_W_XE-cL4UEDq2H6rO" },
        { id: "audio-4", name: "Boat Rockerz", price: 3499, displayPrice: "₹3,499", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoiu4_mhr-P5yPPjUaVA3EMy-y35fuBwt2H8-Is1xJmtplKwJFQbSj5sA_hHx1jsyyQ0ot1ItJ1WVT2aknlBkrZcEZKoHCrQ" },
        { id: "watch-1", name: "Fastrack Smartwatch", price: 1699, displayPrice: "₹1,699", image: "https://m.media-amazon.com/images/I/71Zq87fybwL.jpg" },
        { id: "watch-2", name: "Fire-Boltt Ninja Smartwatch", price: 1999, displayPrice: "₹1,999", image: "https://rukminim2.flixcart.com/image/1500/1500/xif0q/smartwatch/z/8/4/-original-imagwytzfmcgqcdt.jpeg" },
        { id: "watch-3", name: "Apple Watch SE 3", price: 19999, displayPrice: "₹19,999", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYkD1_Pjw5rMg-ks6vZuLZy6MuuJ_rX4m0qhFW4IoSy5bEnTqeXTVcEBNZ5PWk_j3k-4A8accAjmetC5PShED6zqR4aNW-rQ" },
        { id: "watch-4", name: "Noise ColorFit Pro 4 Max", price: 1999, displayPrice: "₹1,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR03yJWW3wH7U5xPG2e5e7YBKXhUmBLXgJGsP5zewf7ViUSbgpyOsWVBlZK0NXAqjOxlG548UIBNgDkxvkYZfBsOmglCZEoRA" },
      ],
    },
    {
      title: "Smartphones",
      products: [
        { id: "phone-1", name: "iPhone 15 Pro Max", price: 145000, displayPrice: "₹1,45,000", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHfDJEtrFsVrYWht7qoER9g8pJxd371PPKU2q6X88Xm-nr1u3UolYTj7sJmoZdDpbw13hKdGjs5neKfKLAeMOhFCpHrvXfEw" },
        { id: "phone-2", name: "Samsung Galaxy S24", price: 120000, displayPrice: "₹1,20,000", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYy__tZEcS7Z_UYu_8r_WFYJQ3WeT3swAwcFBsBDC4YPt9ox6dO6EB-w0B-S48fY4FIMjZdR-E7uL7lYyw97xcBCEEj5neFA" },
        { id: "phone-3", name: "iPhone 14 Pro", price: 89999, displayPrice: "₹89,999", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab" },
        { id: "phone-4", name: "Nothing Phone 3", price: 52999, displayPrice: "₹52,999", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMVHMyOHRbVWOXXK5_mgtOTFV90_JuuwoumPVgwvMuAAjFX1_h4kU-CyFGp0uIPCmxqmWUGKJ29xJ9XSeAYx7EF28yLCWX5A" },
      ],
    },
  ];

  // Instantly adds item to the Supabase tracking stream and jumps to checkout
  const handleBuyNow = (product, categoryTitle) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      addToCart({ ...product, category_title: categoryTitle });
    }
    setView("checkout"); 
  };

  const currentCartQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="home-wrapper">
      <section className="trending-tech" style={{ paddingTop: "60px" }}>
        
        {/* 1. ORIGINAL CLEAN SHOP VIEW (GRID INTERFACE) */}
        {view === "shop" && (
          <>
            {/* THE CENTERED HEADER WITH FLOATING CART BUTTON */}
            <div className="section-header" style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "50px" 
            }}>
              {/* 1. Invisible left column to balance the layout perfectly */}
              <div style={{ flex: 1, minWidth: "150px" }}></div>

              {/* 2. The Perfectly Centered Title Stack */}
              <div style={{ 
                flex: 1, 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                textAlign: "center",
                minWidth: "300px" 
              }}>
                <h2 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "32px", color: "#fff", margin: 0 }}>
                  Explore <span className="neon-text">Electronic Devices</span>
                </h2>
                <div className="neon-line" style={{ marginTop: "10px" }}></div>
              </div>
              
              {/* 3. The Right-Aligned Cart Button Column */}
              <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", minWidth: "150px" }}>
                <button 
                  className="cyber-btn-primary"
                  onClick={() => setView("cart")}
                  style={{ fontFamily: '"Orbitron", sans-serif', padding: "12px 24px" }}
                >
                  Open Cart Preview ({currentCartQuantity})
                </button>
              </div>
            </div>

            {/* Categories Loop */}
            {categories.map((category, index) => (
              <div key={index} style={{ marginBottom: "60px" }}>
                
                <h3 style={{ 
                  fontFamily: '"Orbitron", sans-serif', 
                  fontSize: "22px", 
                  color: "#fff", 
                  marginBottom: "25px",
                  borderLeft: "4px solid var(--neon-blue)",
                  paddingLeft: "15px"
                }}>
                  {category.title}
                </h3>

                <div className="product-grid">
                  {category.products.map((product) => {
                    const globalCartItem = cartItems.find((item) => item.id === product.id);
                    const productQty = globalCartItem ? globalCartItem.quantity : 0;

                    return (
                      <div className="tech-product-card" key={product.id}>
                        
                        <div className="product-image">
                          <img src={product.image} alt={product.name} />
                        </div>

                        <div className="prod-info" style={{ marginTop: "15px" }}>
                          <h4 style={{ fontSize: "16px", fontWeight: "600", minHeight: "44px", margin: "0 0 15px 0", color: "#fff" }}>
                            {product.name}
                          </h4>

                          <div style={{ marginBottom: "15px" }}>
                            <span className="price" style={{ fontSize: "1.2rem", color: "var(--neon-blue)", fontWeight: "bold" }}>
                              {product.displayPrice}
                            </span>
                          </div>

                          {/* ========================================== */}
                          {/* THE 2 BULLETPROOF BUTTONS WITH INLINE STYLES */}
                          {/* ========================================== */}
                          <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                            
                            {/* BUTTON 1: Add to Cart (or quantity stepper if already added) */}
                            {productQty === 0 ? (
                              <button 
                                onClick={() => addToCart({ ...product, category_title: category.title })}
                                style={{ 
                                  flex: 1, 
                                  height: "40px", 
                                  background: "transparent", 
                                  color: "#ffffff", 
                                  border: "1px solid rgba(255, 255, 255, 0.3)", 
                                  borderRadius: "4px", 
                                  cursor: "pointer",
                                  fontSize: "12px",
                                  fontFamily: '"Orbitron", sans-serif'
                                }}
                              >
                                Add to Cart
                              </button>
                            ) : (
                              <div style={{ flex: 1, height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0, 0, 0, 0.5)", border: "1px solid var(--neon-blue)", borderRadius: "4px", padding: "0 5px" }}>
                                <button onClick={() => removeFromCart(product.id)} style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", padding: "5px 10px", fontSize: "16px" }}>-</button>
                                <span style={{ color: "#fff", fontWeight: "bold" }}>{productQty}</span>
                                <button onClick={() => addToCart({ ...product, category_title: category.title })} style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", padding: "5px 10px", fontSize: "16px" }}>+</button>
                              </div>
                            )}

                            {/* BUTTON 2: Buy Now */}
                            <button 
                              onClick={() => handleBuyNow(product, category.title)}
                              style={{ 
                                flex: 1,
                                height: "40px",
                                background: "var(--neon-blue)",
                                color: "#000",
                                border: "none",
                                borderRadius: "4px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: "12px",
                                fontFamily: '"Orbitron", sans-serif'
                              }}
                            >
                              Buy Now
                            </button>

                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </>
        )}

        {/* 2. THE NEW UPGRADED VISUAL CART PREVIEW SCREEN */}
        {view === "cart" && (
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
            
            <button onClick={() => setView("shop")} style={{ marginBottom: "30px", background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}>
              ← Back to Shop
            </button>

            <h2 style={{ fontFamily: '"Orbitron", sans-serif', color: "#fff", fontSize: "28px", marginBottom: "30px" }}>
              Your Saved Shopping Cart
            </h2>

            {cartItems.length === 0 ? (
              <div style={{ textAlign: "center", padding: "50px", background: "rgba(0,0,0,0.3)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ color: "var(--text-muted)", fontSize: "18px", margin: 0 }}>Your cart is empty.</p>
              </div>
            ) : (
              <>
                {/* Visual List of Added Products */}
                <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "40px" }}>
                  {cartItems.map((item, idx) => (
                    <div key={idx} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "25px", 
                      padding: "20px", 
                      background: "rgba(15, 23, 42, 0.6)", 
                      border: "1px solid rgba(0, 240, 255, 0.2)", 
                      borderRadius: "12px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                    }}>
                      {/* White Thumbnail Box for the Image */}
                      <div style={{ 
                        width: "100px", 
                        height: "100px", 
                        background: "#fff", 
                        borderRadius: "8px", 
                        padding: "10px", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center",
                        flexShrink: 0
                      }}>
                        <img src={item.image} alt={item.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                      </div>
                      
                      {/* Product Name & Price Info */}
                      <div>
                        <h4 style={{ color: "#fff", margin: "0 0 10px 0", fontSize: "22px", fontWeight: "700" }}>{item.name}</h4>
                        <p style={{ color: "var(--neon-blue)", margin: 0, fontWeight: "bold", fontSize: "18px" }}>
                          {item.displayPrice || `₹${item.price.toLocaleString("en-IN")}`} 
                          <span style={{ color: "var(--text-muted)", fontSize: "14px", marginLeft: "10px", fontWeight: "normal" }}>
                            (Qty: {item.quantity})
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Strip with Clear Cart and Proceed buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
                  
                  <button 
                    onClick={() => {
                      if (clearCart) clearCart();
                    }}
                    style={{ 
                      background: "transparent", 
                      color: "#ff4d4d", 
                      border: "1px solid #ff4d4d", 
                      padding: "12px 24px", 
                      borderRadius: "6px", 
                      cursor: "pointer", 
                      fontWeight: "bold",
                      transition: "0.2s ease"
                    }}
                    onMouseOver={(e) => { e.target.style.background = "rgba(255, 77, 77, 0.1)"; }}
                    onMouseOut={(e) => { e.target.style.background = "transparent"; }}
                  >
                    Clear Cart Page
                  </button>

                  <button 
                    onClick={() => setView("checkout")} 
                    style={{ 
                      background: "var(--neon-blue)", 
                      color: "#000", 
                      border: "none", 
                      padding: "14px 32px", 
                      borderRadius: "6px", 
                      fontWeight: "bold", 
                      cursor: "pointer", 
                      fontFamily: '"Orbitron", sans-serif',
                      fontSize: "16px",
                      boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)"
                    }}
                  >
                    Proceed to Checkout
                  </button>

                </div>
              </>
            )}
          </div>
        )}

        {/* 3. FINAL STEP: PAYMENT FORM CONTAINER */}
        {view === "checkout" && (
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
            <Checkout 
              cartItems={cartItems} 
              onBackToShop={() => setView("shop")} 
              onOrderSuccess={(details) => {
                alert(`Order successfully placed for ${details?.name || "your items"}!`);
                if (clearCart) clearCart(); 
                setView("shop");
              }} 
            />
          </div>
        )}

      </section>
    </div>
  );
}

export default Products;