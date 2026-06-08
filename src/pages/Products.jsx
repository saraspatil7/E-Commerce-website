import React from "react";

function Products() {
  const categories = [
    {
      title: "Premium Laptops",

      products: [
        {
          name: "MacBook Pro M3",
          price: "₹1,85,000",
          image:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnytenrofUc82GBmbSjdu2hmHoxi6lvfZxdOtPMYSzv2uGbSkwXOo51xGRzKGQoBD7-YZiDSMfgrmgBAnsTLTDj5QPA9Zh",
        },

        {
          name: "ASUS ROG Gaming",
          price: "₹1,45,000",
          image:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMIwWML7xUWm0nHf-rZu7XAPAKAZvmj3M0ipMQs_7BI3eLQ58FlJ8wSIOHG-lx5hnFdwYLOvm4BYbLGdO82qP0I0A9vasSIQ",
        },

        {
          name: "HP Pavilion",
          price: "₹82,000",
          image:
            "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
        },

        {
          name: "Dell XPS",
          price: "₹1,10,000",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSSYcDEKGbRBaXz5nxjDU1LBSEUDOBaNFDuw8Sxl5PgAmv0yUN2sNhncjTVpCw5HXlmImIAGIn4yL-a5ytixPbtIbBnxyc",
        },

        {
          name: "Lenovo Legion",
          price: "₹1,35,000",
          image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8EcnccRYkNqZQxZ_dDJxCgI-NyJg3DVqbxp0D2bIuHnV1z7FAAb8HgDhOyPvrPK79dx2m7Oi6xuP9eY2N42QiPHcNiyrJ",
        },

        {
          name: "Acer Predator",
          price: "₹1,28,000",
          image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnj-IO3Jc31Fq-cwaUKX6knivaGsGG9Lo3QCIHC3OibG3vqRUKn_skuMT6BlurIvaaIdXoosHwJPaGqWz1bZpCLrGHIWzjpw",
        },

        {
          name: "MSI Creator",
          price: "₹1,50,000",
          image:
            "https://m.media-amazon.com/images/I/71p0nLHatoL.jpg",
        },

        {
          name: "HP Victus Gaming Laptop",
          price: "₹1,50,000",
          image:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcVqJqqG6L3uFmk4nSfphrOScuVMnhufEIbM5sMCdIVCWa9G-BkviWs34h_C0ASNqvxyU84LBxLklIw7LMczdRJGcjtjA2M42-hMigFTQFjghzgp4PC8x5_PY",
        },
      ],
    },

    {
      title: "Wireless Headphones & Smart Watches",

      products: [
        {
          name: "Sony WH-1000XM5",
          price: "₹29,999",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        },

        {
          name: "AirPods Max",
          price: "₹59,999",
          image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEjinjXXZPTObOrtqp_ApbQ7_PcEQ-DbEYJE8v22vbpnKT81ZDtaBhXEh9gC0Nsok-RKR1ZAn-hDdBASX-MGLsuc58mxGN",
        },

        {
          name: "JBL Tune 760",
          price: "₹8,999",
          image:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtMB2rvRyCO7zwp4_mG3p9HF3Zkdz72mQ1iV3fhkdFtFf6RU2LhKGK2jp_IjAFQ_hWYHqzw5u9L1_W_XE-cL4UEDq2H6rO",
        },

        {
          name: "Boat Rockerz",
          price: "₹3,499",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoiu4_mhr-P5yPPjUaVA3EMy-y35fuBwt2H8-Is1xJmtplKwJFQbSj5sA_hHx1jsyyQ0ot1ItJ1WVT2aknlBkrZcEZKoHCrQ",
        },

        {
          name: "Fastrack Smartwatch",
          price: "₹1,699",
          image:
            "https://m.media-amazon.com/images/I/71Zq87fybwL.jpg",
        },

        {
          name: "Fire-Boltt Ninja Smartwatch",
          price: "₹1,999",
          image:
            "https://rukminim2.flixcart.com/image/1500/1500/xif0q/smartwatch/z/8/4/-original-imagwytzfmcgqcdt.jpeg",
        },
        {
          name: "Apple Watch SE 3",
          price: "₹19,999",
          image:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYkD1_Pjw5rMg-ks6vZuLZy6MuuJ_rX4m0qhFW4IoSy5bEnTqeXTVcEBNZ5PWk_j3k-4A8accAjmetC5PShED6zqR4aNW-rQ",
        },
        {
          name: "Noise ColorFit Pro 4 Max",
          price: "₹1,999",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR03yJWW3wH7U5xPG2e5e7YBKXhUmBLXgJGsP5zewf7ViUSbgpyOsWVBlZK0NXAqjOxlG548UIBNgDkxvkYZfBsOmglCZEoRA",
        },
      ],
    },

    {
      title: "Smartphones",

      products: [
        {
          name: "iPhone 15 Pro Max",
          price: "₹1,45,000",
          image:
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHfDJEtrFsVrYWht7qoER9g8pJxd371PPKU2q6X88Xm-nr1u3UolYTj7sJmoZdDpbw13hKdGjs5neKfKLAeMOhFCpHrvXfEw",
        },

        {
          name: "Samsung Galaxy S24",
          price: "₹1,20,000",
          image:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYy__tZEcS7Z_UYu_8r_WFYJQ3WeT3swAwcFBsBDC4YPt9ox6dO6EB-w0B-S48fY4FIMjZdR-E7uL7lYyw97xcBCEEj5neFA",
        },

        {
          name: "iPhone 14 Pro",
          price: "₹89,999",
          image:
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
        },

        {
          name: "Nothing Phone 3",
          price: "₹52,999",
          image:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMVHMyOHRbVWOXXK5_mgtOTFV90_JuuwoumPVgwvMuAAjFX1_h4kU-CyFGp0uIPCmxqmWUGKJ29xJ9XSeAYx7EF28yLCWX5A",
        },


        
      ],
    },
  ];

  return (
    <section className="page-section">
      <div className="section-title">
        <span></span>

        <h2>Explore Electronic Devices</h2>
      </div>

      {categories.map((category, index) => (
        <div key={index} className="shop-category">
          <h2 className="category-heading">
            {category.title}
          </h2>

          <div className="product-grid">
            {category.products.map((product, i) => (
              <div className="product-card" key={i}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="product-content">
                  <h3>{product.name}</h3>

                  <p>{product.price}</p>

                  <button className="primary-btn">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;