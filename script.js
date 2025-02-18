


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Lord Ganesha Idol', price: 500, image: 'ganesha.jpg', category: 'idols' },
        { id: 2, name: 'Incense Sticks', price: 100, image: 'incense.jpg', category: 'incense' },
        { id: 3, name: 'Brass Lamp', price: 800, image: 'lamp.jpg', category: 'lamps' },
        // Add more products here...
    ];

    // Display products
    function renderProducts(productList) {
        const productGrid = document.getElementById('product-grid');
        productGrid.innerHTML = productList.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <!-- Commented out Add to Cart functionality -->
                <!--<button onclick="addToCart(${product.id})">Add to Cart</button>-->
                <button>View Details</button>
            </div>
        `).join('');
    }

    /*
    // Add to cart functionality (commented out)
    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    };

    // Update cart functionality (commented out)
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    // Render cart functionality (commented out)
    function renderCart() {
        const cartItemsDiv = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartCount = document.getElementById('cart-count');
        cartItemsDiv.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItemsDiv.appendChild(itemDiv);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = total;
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Remove from cart functionality (commented out)
    window.removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    };
    */

    // Show checkout form functionality (commented out)
    /*
    window.showCheckoutForm = () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        document.getElementById('checkout').style.display = 'block';
    };
    */

    // Handle checkout form submission functionality (commented out)
    /*
    document.getElementById('checkout-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const customerDetails = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            cart: cart, // Cart items from localStorage
            total: document.getElementById('cart-total').textContent,
        };
        const whatsappMessage = `I would like to place an order:\nName: ${customerDetails.name}\nEmail: ${customerDetails.email}\nPhone: ${customerDetails.phone}\nAddress: ${customerDetails.address}\n\nProducts:\n${cart.map(item => `${item.name} - ₹${item.price} x ${item.quantity}`).join('\n')}\nTotal: ₹${customerDetails.total}`;
        const whatsappUrl = `https://wa.me/919106143797?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank'); // Open WhatsApp chat
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
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
