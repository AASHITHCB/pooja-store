const products = [
  {
    name: "Brass Diya",
    price: "₹299",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Agarbatti",
    price: "₹120",
    image: "https://via.placeholder.com/200"
  },
  {
    name: "Ganesha Idol",
    price: "₹549",
    image: "https://via.placeholder.com/200"
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
};
