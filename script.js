// Maple Friend - Scented Candles E-commerce JavaScript

// Product data
const products = [
    {
        id: 1,
        name: "Lavender Dream Candle",
        price: 12.99,
        originalPrice: 18.99,
        image: "Sản phẩm/SP1/S723b9404eaab484d8bb7a8d1c97a16e6f.jpg_960x960q75.jpg_.avif",
        category: "SP1",
        description: "Relaxing lavender scented candle, helps reduce stress and promotes better sleep.",
        images: [
            "Sản phẩm/SP1/S723b9404eaab484d8bb7a8d1c97a16e6f.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP1/S8705487546ca4709a2f6f48ee54609b7B.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP1/S9e3f3e1c9fd1407d89e8dc1ec7ba6d117.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP1/Scf2686d959e4490fb29b6c3fefc24ba1G.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP1/S8b669167a36147abb86f02d8acde9134V.jpg_960x960q75.jpg_.avif"
        ]
    },
    {
        id: 2,
        name: "Vanilla Sweet Candle",
        price: 14.99,
        originalPrice: 21.99,
        image: "Sản phẩm/SP2/Sceac61f636964d82b9f6da8a87afdc843.avif",
        category: "SP2",
        description: "Sweet and warm vanilla fragrance, creates a cozy atmosphere for your home.",
        images: [
            "Sản phẩm/SP2/Sceac61f636964d82b9f6da8a87afdc843.avif",
            "Sản phẩm/SP2/S0fc16d1fe5aa48c79329709dd24a9d41u.avif",
            "Sản phẩm/SP2/Scae8fd5ee44c42928ca9bb62b3ea87fc8.avif",
            "Sản phẩm/SP2/Sec14601627c1446dad4c6ecfe3f3f5f17.avif",
            "Sản phẩm/SP2/S9932595bed9847debc3e5f0bef325f5cH.jpg_960x960q75.jpg_.avif"
        ]
    },
    {
        id: 3,
        name: "Rose Garden Candle",
        price: 16.99,
        originalPrice: 24.99,
        image: "Sản phẩm/SP3/S9f75cc5e48924972be81b7e2c32dcd18B.jpg_960x960q75.jpg_.avif",
        category: "SP3",
        description: "Romantic rose fragrance, perfect for special evenings and creating elegance.",
        images: [
            "Sản phẩm/SP3/S9f75cc5e48924972be81b7e2c32dcd18B.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP3/S44e33561b21e44b0b2804c4fa676bc72n.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP3/Sbef65a712db948eea3662aaf9f569216d.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP3/Sd0d79f4bc65c465f97b2baee8d05157fG.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP3/Sb917cb4e2f664624be18899e2c637080J.avif"
        ]
    },
    {
        id: 4,
        name: "Ocean Breeze Candle",
        price: 15.99,
        originalPrice: 22.99,
        image: "Sản phẩm/SP4/S25e33d952caf44be8ff18f22723525711.jpg_960x960q75.jpg_.avif",
        category: "SP4",
        description: "Fresh ocean scent that brings relaxation like you're on vacation.",
        images: [
            "Sản phẩm/SP4/S25e33d952caf44be8ff18f22723525711.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP4/S3cc3395f82da4cc6b695f04f09915ce4X.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP4/S60866f94b36244ebbf51cda3812e5b98t.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP4/S9ae4d415a35c4e0a92c36850a3badb090.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP4/Sa0ecfb347bf4470783a57959e1a99d6fC.avif"
        ]
    },
    {
        id: 5,
        name: "Cinnamon Spice Candle",
        price: 13.99,
        originalPrice: 19.99,
        image: "Sản phẩm/SP5/S1ea3db55fad2495391e70c6064facd11P.jpg_960x960q75.jpg_.avif",
        category: "SP5",
        description: "Warm cinnamon spice fragrance, reminiscent of cozy holiday evenings.",
        images: [
            "Sản phẩm/SP5/S1ea3db55fad2495391e70c6064facd11P.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP5/S380be6cb8f6b4b129f8cd9633d0da207G.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP5/S4a4f101dd2954d37bd882edb9982c4aej.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP5/S76473211b4104ee9a9f8887666b577faB.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP5/S91da71fca2084796934afcec140dadf51.jpg_960x960q75.jpg_.avif"
        ]
    },
    {
        id: 6,
        name: "Jasmine Night Candle",
        price: 18.99,
        originalPrice: 26.99,
        image: "Sản phẩm/SP6/S259b641c445b40b09e03d7527a9038d7j.jpg_960x960q75.jpg_.avif",
        category: "SP6",
        description: "Delicate jasmine fragrance, elegant and sophisticated for peaceful ambiance.",
        images: [
            "Sản phẩm/SP6/S5c7de34987b24a399708fcdba144fb0fJ.png_960x960.png_.avif",
            "Sản phẩm/SP6/S259b641c445b40b09e03d7527a9038d7j.jpg_960x960q75.jpg_.avif",
            "Sản phẩm/SP6/Sab84011abc9d48dda84f5d90e0349c8c1.png_960x960.png_ (1).avif",
            "Sản phẩm/SP6/Seb94fd5a3e3348b78691f47d26764616v.png_960x960.png_.avif",
            "Sản phẩm/SP6/Sf1b8706df81b498fb6f6b45f5edf4e1aQ.png_960x960.png_.avif"
        ]
    }
];

// Cart functionality
let cart = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    loadCart();
    
    // Update cart display
    updateCartDisplay();
    
    // Initialize product displays
    if (document.getElementById('featured-products')) {
        displayFeaturedProducts();
    }
    
    if (document.getElementById('all-products')) {
        displayAllProducts();
    }
    
    // Initialize product detail page
    if (document.getElementById('product-detail')) {
        displayProductDetail();
    }
    
    // Initialize cart page
    if (document.getElementById('cart-items-container')) {
        displayCartItems();
        updateCartSummary();
        
        // Load related products for cart page
        loadRelatedProducts();
    }
    
    // Initialize contact form
    if (document.getElementById('contact-form')) {
        initializeContactForm();
    }
});

// Display featured products on home page
function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    const featuredProducts = products.slice(0, 3);
    
    container.innerHTML = featuredProducts.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="price-container">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <span class="original-price">${formatPrice(product.originalPrice)}</span>
                </div>
                <p class="product-description">${product.description}</p>
                <button class="btn" onclick="viewProduct(event, ${product.id})">Buy Now</button>
            </div>
        </div>
    `).join('');
}

// Display all products on products page
function displayAllProducts() {
    const container = document.getElementById('all-products');
    
    container.innerHTML = products.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="price-container">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <span class="original-price">${formatPrice(product.originalPrice)}</span>
                </div>
                <p class="product-description">${product.description}</p>
                <button class="btn" onclick="addToCart(event, ${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Display product detail
function displayProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    const container = document.getElementById('product-detail');
    container.innerHTML = `
        <div class="detail-container">
            <div>
                <img src="${product.image}" alt="${product.name}" class="detail-image">
            </div>
            <div class="detail-info">
                <h1 class="detail-title">${product.name}</h1>
                <p class="detail-price">${formatPrice(product.price)}</p>
                <p class="detail-description">${product.description}</p>
                <div class="quantity-selector">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" value="1" min="1" max="10">
                </div>
                <button class="btn-add-cart" onclick="addToCartDetail(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// View product detail
function viewProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// Add to cart from product card
function addToCart(event, productId) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartDisplay();
    showNotification('Product added to cart!');
}

// Add to cart from detail page
function addToCartDetail(productId) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = products.find(p => p.id === productId);
    
    // Get selected variant information
    const selectedVariant = document.querySelector('.variant-option.selected');
    const variantName = selectedVariant ? selectedVariant.dataset.variant : 'classic';
    const variantPrice = selectedVariant ? parseFloat(selectedVariant.dataset.price) : product.price;
    
    // Create a unique identifier for the product variant
    const cartItemId = `${productId}-${variantName}`;
    const existingItem = cart.find(item => item.cartItemId === cartItemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            cartItemId: cartItemId,
            quantity: quantity,
            variant: variantName,
            price: variantPrice,
            name: `${product.name} (${variantName.charAt(0).toUpperCase() + variantName.slice(1)})`
        });
    }
    
    saveCart();
    updateCartDisplay();
    showNotification(`Added ${quantity} ${product.name} (${variantName}) to cart!`);
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = formatPrice(total);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('maplefriend-cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('maplefriend-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #8B4513, #D2691E);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize contact form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the data to a server
        showNotification('Thank you for contacting us! We will respond as soon as possible.');
        form.reset();
    });
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Cart page functions
function displayCartItems() {
    const container = document.getElementById('cart-items-container');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 3rem; background: white; border-radius: 15px; box-shadow: var(--shadow);">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Your cart is empty</h3>
                <p style="color: var(--text-light); margin-bottom: 2rem;">Start shopping for our premium scented candles!</p>
                <a href="products.html" class="btn">Continue Shopping</a>
            </div>
        `;
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity('${item.cartItemId || item.id}', ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" onchange="updateQuantity('${item.cartItemId || item.id}', this.value)">
                    <button class="quantity-btn" onclick="updateQuantity('${item.cartItemId || item.id}', ${item.quantity + 1})">+</button>
                    <button class="remove-item" onclick="removeFromCart('${item.cartItemId || item.id}')">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 5.99 : 0;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shipping').textContent = formatPrice(shipping);
    document.getElementById('total').textContent = formatPrice(total);
}

function updateQuantity(itemId, newQuantity) {
    const quantity = parseInt(newQuantity);
    if (quantity < 1 || quantity > 10) return;
    
    const item = cart.find(item => (item.cartItemId || item.id) === itemId);
    if (item) {
        item.quantity = quantity;
        saveCart();
        updateCartDisplay();
        displayCartItems();
        updateCartSummary();
    }
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => (item.cartItemId || item.id) === itemId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        saveCart();
        updateCartDisplay();
        displayCartItems();
        updateCartSummary();
        showNotification('Item removed from cart');
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    showNotification('Proceeding to checkout...');
    // Here you would normally redirect to a checkout page
}

function applyPromoCode() {
    const promoCode = document.getElementById('promo-code').value.trim();
    if (!promoCode) {
        showNotification('Please enter a promo code');
        return;
    }
    showNotification('Promo code applied successfully!');
    document.getElementById('promo-code').value = '';
}

// Subscribe to newsletter
function subscribeNewsletter() {
    const emailInputs = document.querySelectorAll('input[type="email"][placeholder*="email"]');
    let email = '';
    
    // Find the email input from the current page context
    for (let input of emailInputs) {
        if (input.value.trim()) {
            email = input.value.trim();
            break;
        }
    }
    
    if (!email) {
        showNotification('Please enter your email address');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address');
        return;
    }
    
    // Here you would normally send the email to a server
    showNotification('Thank you for subscribing! Check your email for confirmation.');
    
    // Clear the email input
    for (let input of emailInputs) {
        if (input.value.trim() === email) {
            input.value = '';
            break;
        }
    }
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Load related products for cart page
function loadRelatedProducts() {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;
    
    // Get first 4 products as related products
    const relatedProducts = products.slice(0, 4);
    
    relatedContainer.innerHTML = relatedProducts.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="price-container">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    <span class="original-price">${formatPrice(product.originalPrice)}</span>
                </div>
                <p class="product-description">${product.description}</p>
                <button class="btn" onclick="addToCart(event, ${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Format VND price
function formatVNDPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Clear cart completely
function clearCart() {
    cart = [];
    localStorage.removeItem('maplefriend-cart');
    updateCartDisplay();
    displayCartItems();
    updateCartSummary();
    showNotification('Cart cleared');
}

// Force clear cart (for debugging stuck items)
function forceClearCart() {
    localStorage.removeItem('maplefriend-cart');
    cart = [];
    updateCartDisplay();
    if (document.getElementById('cart-items-container')) {
        displayCartItems();
        updateCartSummary();
    }
    showNotification('Cart force cleared!');
}

// Add to cart function for cart page
function addToCart(productId, productName, price, image) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartDisplay();
    showNotification('Product added to cart!');
}
