import "./App.css";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* COMPONENTS */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}

      <Navbar />

      {/* ROUTES */}

      <Routes>

        {/* DEFAULT HOME PAGE */}

        <Route
          path="/"
          element={<Navigate to="/home" />}
        />

        {/* HOME */}

        <Route
          path="/home"
          element={<Home />}
        />

        {/* PRODUCTS */}

        <Route
          path="/products"
          element={<Products />}
        />

        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT */}

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default App;