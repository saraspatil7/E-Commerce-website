import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import "../App.css";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state for adding a new product
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    category_title: "",
  });

  // Load all products when the page opens
  useEffect(() => {
    fetchProducts();
  }, []);

  // 1. FETCH PRODUCTS FROM SUPABASE
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("products") // Make sure you have a 'products' table in Supabase!
        .select("*")
        .order("id", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching inventory:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. ADD A NEW PRODUCT
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: newProduct.name,
        price: Number(newProduct.price),
        image: newProduct.image,
        category_title: newProduct.category_title,
      };

      const { error } = await supabase.from("products").insert([payload]);

      if (error) throw error;

      alert("Product successfully added to inventory!");
      setNewProduct({ name: "", price: "", image: "", category_title: "" }); // Clear form
      fetchProducts(); // Refresh the list
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("Failed to add product: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 3. DELETE A PRODUCT
  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;

      alert("Product deleted!");
      fetchProducts(); // Refresh the list
    } catch (error) {
      console.error("Error deleting product:", error.message);
      alert("Failed to delete product: " + error.message);
    }
  };

  // --- STYLING (Matches your Cyber Theme) ---
  const inputStyle = {
    background: "rgba(0, 0, 0, 0.5)",
    border: "1px solid var(--neon-blue, #00f0ff)",
    color: "#ffffff",
    padding: "12px",
    borderRadius: "6px",
    outline: "none",
    fontFamily: '"Orbitron", sans-serif',
    fontSize: "14px",
    width: "100%",
    marginBottom: "15px"
  };

  return (
    <div className="home-wrapper" style={{ padding: "80px 8%", minHeight: "100vh", color: "#fff" }}>
      
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontFamily: '"Orbitron", sans-serif', fontSize: "32px", margin: 0 }}>
          Inventory <span className="neon-text">Command Center</span>
        </h2>
        <div className="neon-line" style={{ marginTop: "10px", margin: "10px auto" }}></div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center" }}>
        
        {/* LEFT COLUMN: ADD PRODUCT FORM */}
        <div style={{ flex: "1 1 400px", background: "rgba(15, 23, 42, 0.8)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(0, 240, 255, 0.3)" }}>
          <h3 style={{ fontFamily: '"Orbitron", sans-serif', marginBottom: "20px", color: "var(--neon-blue, #00f0ff)" }}>Add New Product</h3>
          
          <form onSubmit={handleAddProduct}>
            <label style={{ fontSize: "12px", color: "#a0aec0", marginBottom: "5px", display: "block" }}>Product Name</label>
            <input style={inputStyle} type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="ex. RTX 4090 Graphics Card" required />

            <label style={{ fontSize: "12px", color: "#a0aec0", marginBottom: "5px", display: "block" }}>Price (₹)</label>
            <input style={inputStyle} type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="ex. 150000" required />

            <label style={{ fontSize: "12px", color: "#a0aec0", marginBottom: "5px", display: "block" }}>Image URL</label>
            <input style={inputStyle} type="url" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="https://..." required />

            <label style={{ fontSize: "12px", color: "#a0aec0", marginBottom: "5px", display: "block" }}>Category</label>
            <input style={inputStyle} type="text" name="category_title" value={newProduct.category_title} onChange={handleInputChange} placeholder="ex. Premium Laptops" required />

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                background: "var(--neon-blue, #00f0ff)",
                color: "#000",
                border: "none",
                padding: "12px 20px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                width: "100%",
                fontFamily: '"Orbitron", sans-serif'
              }}
            >
              {isSubmitting ? "Uploading..." : "Deploy to Store"}
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: INVENTORY LIST */}
        <div style={{ flex: "2 1 500px", background: "rgba(15, 23, 42, 0.8)", padding: "30px", borderRadius: "12px", border: "1px solid rgba(0, 240, 255, 0.3)" }}>
          <h3 style={{ fontFamily: '"Orbitron", sans-serif', marginBottom: "20px", color: "var(--neon-blue, #00f0ff)" }}>Live Database</h3>
          
          {isLoading ? (
            <p>Loading inventory payload...</p>
          ) : products.length === 0 ? (
            <p style={{ color: "#a0aec0" }}>Your database is currently empty.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxHeight: "600px", overflowY: "auto", paddingRight: "10px" }}>
              {products.map((product) => (
                <div key={product.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.5)", padding: "15px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px", objectFit: "contain", background: "#fff", borderRadius: "4px", padding: "2px" }} />
                    <div>
                      <h4 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>{product.name}</h4>
                      <p style={{ margin: 0, color: "var(--neon-blue, #00f0ff)", fontSize: "14px", fontWeight: "bold" }}>₹{product.price.toLocaleString("en-IN")}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleDeleteProduct(product.id)}
                    style={{ background: "transparent", border: "1px solid #ff4d4d", color: "#ff4d4d", padding: "8px 12px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
                  >
                    Delete
                  </button>
                  
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default AdminProducts;