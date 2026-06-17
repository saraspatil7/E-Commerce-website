import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

/* CONTEXT PROVIDER */
import { CartProvider } from "./context/CartContext";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage"; // Dedicated Cart Page
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminProducts from "./AdminProducts";

function App() {
  return (
    // Wrapping everything inside CartProvider so Navbar, Products, and CartPage share data
    <CartProvider>
      <div className="app">
        {/* NAVBAR */}
        <Navbar />

        {/* ROUTES */}
        <Routes>
          {/* DEFAULT HOME PAGE */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* HOME */}
          <Route path="/home" element={<Home />} />

          {/* PRODUCTS */}
          <Route path="/products" element={<Products />} />

          {/* DEDICATED CART PAGE */}
          <Route path="/cart" element={<CartPage />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* ADMINISTRATIVE CONTROL PANEL 👇 */}
          <Route path="/admin" element={<AdminProducts />} />
          
        </Routes>

        {/* FOOTER */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;