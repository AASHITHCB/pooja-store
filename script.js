// Product Data
const allProducts = [
    // Idols
    { id: 1, name: 'Lakshmi Idol', price: 1299, category: 'idols', image: 'img/lakshmi.jpg', description: '24k gold plated brass idol' },
    { id: 2, name: 'Ganesh Idol', price: 999, category: 'idols', image: 'img/ganesh.jpg', description: 'Hand-carved marble idol' },
    
    // Lamps
    { id: 3, name: 'Brass Diya Set', price: 299, category: 'lamps', image: 'img/diya-set.jpg', description: 'Set of 7 traditional diyas' },
    { id: 4, name: 'LED Temple Lamp', price: 599, category: 'lamps', image: 'img/led-lamp.jpg', description: 'Rechargeable LED lamp' },
    
    // Incense
    { id: 5, name: 'Sandalwood Incense', price: 149, category: 'incense', image: 'img/incense.jpg', description: 'Pack of 50 agarbatti' },
    
    // Accessories
    { id: 6, name: 'Rudraksha Mala', price: 999, category: 'accessories', image: 'img/mala.jpg', description: '108 bead authentic mala' },
    { id: 7, name: 'Pooja Thali Set', price: 599, category: 'accessories', image: 'img/thali.jpg', description: 'Complete brass pooja set' }
];

// App State
let currentProducts = [];
let visibleProducts = 4;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const loadMoreBtn = document.getElementById('load-more');
const cartCount = document.getElementById('cart-count');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    currentProducts = [...allProducts];
    filterProducts();
    updateCartDisplay();
});

// Product Filtering
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    currentProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });

    renderProducts();
}

// Product Rendering
function renderProducts() {
    productGrid.innerHTML = currentProducts
        .slice(0, visibleProducts)
        .map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">₹${product.price}</p>
                <button onclick="addToCart(${product.id})" class="add-to-cart">
                    Add to Cart <i class="fas fa-cart-plus"></i>
                </button>
            </div>
        `).join('');

    loadMoreBtn.style.display = visibleProducts >= currentProducts.length ? 'none' : 'block';
}

// Load More Products
loadMoreBtn.addEventListener('click', () => {
    visibleProducts += 4;
    renderProducts();
});

// Search and Filter Events
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// Cart Functions
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
    showAddToCartFeedback(product.name);
}

function updateCartDisplay() {
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart items list
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} (${item.quantity})</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');
    
    // Update totals
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function showAddToCartFeedback(productName) {
    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = `Added ${productName} to cart!`;
    document.body.appendChild(feedback);
    
    setTimeout(() => feedback.remove(), 2000);
}

// Checkout Function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const message = `Namaste! I would like to order from Sharada Pooja Store:\n\n${cart.map(item => 
        `🪔 ${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
    ).join('\n')}\n\nTotal: ₹${document.getElementById('cart-total').textContent}\n\nPlease confirm my order. 🙏`;

    const whatsappUrl = `https://wa.me/919106143797?text=${encodeURIComponent(message)}`;
    
    // Clear cart after order
    cart = [];
    updateCartDisplay();
    
    window.open(whatsappUrl, '_blank');
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will respond shortly.');
    e.target.reset();
});

