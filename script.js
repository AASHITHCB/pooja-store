const products = [
  {
    name: "Brass Diya",
    price: "₹299",
    image: "diya.jpg"
  },
  {
    name: "Agarbatti",
    price: "₹120",
    image: "agarbatti.jpg"
  },
  {
    name: "Ganesha Idol",
    price: "₹549",
    image: "ganesha.jpg"
  }
];

function loadProducts() {
  const grid = document.getElementById("product-grid");

  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <a class="card-btn"
         href="https://wa.me/919824370080?text=I want ${p.name}">
         Order
      </a>
    </div>
  `).join('');
}

loadProducts();

/* Mobile menu */
document.getElementById("hamburger").onclick = () => {
  document.getElementById("nav-links").classList.toggle("show");
};                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(customerDetails),
            });
            if (response.ok) {
                alert('Order placed successfully! We will contact you shortly.');
                cart = []; // Clear cart
                updateCart(); // Update cart UI
                document.getElementById('checkout').style.display = 'none'; // Hide checkout form
            } else {
                alert('Failed to save order details. Please try again.');
            }
        } catch (error) {
            console.error('Error saving order:', error);
            alert('An error occurred while placing your order. Please try again.');
        }
    });
    */

    // Initial rendering
    renderProducts(products.slice(0, 12)); // Show first 12 products
});

// Load more products functionality (kept for now)
document.getElementById('load-more').addEventListener('click', () => {
    const nextProducts = products.slice(displayedProducts.length, displayedProducts.length + 8);
    displayedProducts = displayedProducts.concat(nextProducts);
    renderProducts(displayedProducts);
    if (displayedProducts.length >= products.length) {
        document.getElementById('load-more').style.display = 'none';
    }
});
