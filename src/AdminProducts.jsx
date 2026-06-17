import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form input states
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("Premium Laptops");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  // 1. READ
  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*");
    if (error) console.error("Error fetching:", error.message);
    else setProducts(data || []);
    setLoading(false);
  };

  // 2. CREATE & UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !image) return alert("Fill all fields");

    if (editingId) {
      const { error } = await supabase
        .from("products")
        .update({ name, price, image, category_title: categoryTitle })
        .eq("id", editingId);
      if (error) console.error(error.message);
      setEditingId(null);
    } else {
      const { error } = await supabase
        .from("products")
        .insert([{ name, price, image, category_title: categoryTitle }]);
      if (error) console.error(error.message);
    }

    setName(""); setPrice(""); setImage("");
    fetchProducts();
  };

  // 3. DELETE
  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this hardware node?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) console.error(error.message);
    else fetchProducts();
  };

  return (
    <div className="home-wrapper">
      <section className="trending-tech" style={{ paddingTop: "40px" }}>
        <div className="section-header" style={{ alignItems: "center", textAlign: "center" }}>
          <span className="cyber-badge">SYSTEM CONTROL</span>
          <h2>Database <span className="neon-text">Inventory Matrix</span></h2>
          <div className="neon-line" style={{ margin: "10px auto" }}></div>
        </div>

        {/* Input Form */}
        <div className="tech-product-card" style={{ maxWidth: "500px", margin: "0 auto 40px", padding: "20px" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input type="text" placeholder="Device Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: "10px", background: "#000", border: "1px solid rgba(0,240,255,0.2)", color: "#fff" }} />
            <input type="text" placeholder="Display Price (e.g., ₹1,45,000)" value={price} onChange={(e) => setPrice(e.target.value)} style={{ padding: "10px", background: "#000", border: "1px solid rgba(0,240,255,0.2)", color: "#fff" }} />
            <input type="text" placeholder="Image Anchor URL" value={image} onChange={(e) => setImage(e.target.value)} style={{ padding: "10px", background: "#000", border: "1px solid rgba(0,240,255,0.2)", color: "#fff" }} />
            <select value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)} style={{ padding: "10px", background: "#07090e", border: "1px solid rgba(0,240,255,0.2)", color: "#fff" }}>
              <option value="Premium Laptops">Premium Laptops</option>
              <option value="Wireless Headphones & Smart Watches">Wireless Headphones & Smart Watches</option>
              <option value="Smartphones">Smartphones</option>
            </select>
            <button type="submit" className="cyber-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              {editingId ? "Update Node" : "Deploy New Item"}
            </button>
          </form>
        </div>

        {/* Inventory Item List */}
        <div className="product-grid">
          {products.map((p) => (
            <div className="tech-product-card" key={p.id} style={{ padding: "15px" }}>
              <h4 style={{ margin: "0 0 10px 0" }}>{p.name}</h4>
              <p className="price" style={{ fontSize: "1.1rem" }}>{p.price}</p>
              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <button className="secondary-btn" onClick={() => { setEditingId(p.id); setName(p.name); setPrice(p.price); setImage(p.image); setCategoryTitle(p.category_title); }} style={{ padding: "5px 10px", fontSize: "12px" }}>Edit</button>
                <button className="secondary-btn" onClick={() => deleteProduct(p.id)} style={{ padding: "5px 10px", fontSize: "12px", color: "#ef4444", borderColor: "rgba(239,68,68,0.3)" }}>Purge</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminProducts;