const products = [
    { id: 1, name: "BERGAMOT & LEMON", price: 120, img: "https://i.pinimg.com/736x/0a/d5/82/0ad5825cf5b3082d50021b694ecbb6fe.jpg" },
    { id: 2, name: "ROSE & WHITE MUSK", price: 140, img: "https://i.pinimg.com/control1/736x/d7/93/87/d79387bfc2e42110f54f7594f7fb15bc.jpg" },
    { id: 3, name: "PEAR & VANILLA", price: 130, img: "https://i.pinimg.com/736x/3f/82/f4/3f82f4e85f79dcfcd9180632618328dd.jpg" },
    { id: 4, name: "TUBEROSE & NEROLI", price: 150, img: "https://i.pinimg.com/1200x/15/67/9c/15679cfe659745f62319d74964ef4e67.jpg" },
    { id: 5, name: "JASMINE & OUD", price: 180, img: "https://i.pinimg.com/1200x/12/07/ed/1207ed7ed39e2e53ac71d077272d604e.jpg" },
    { id: 6, name: "AMBER & SANDALWOOD", price: 160, img: "https://i.pinimg.com/736x/e4/c4/cd/e4c4cd63e8d1ad95f3bc42efab1c0687.jpg" },
    { id: 7, name: "VETIVER & SPICE", price: 145, img: "https://i.pinimg.com/736x/b5/22/42/b52242f1d42bf379543ce9843e80564c.jpg" },
    { id: 8, name: "ORANGE BLOSSOM", price: 110, img: "https://i.pinimg.com/736x/2d/bc/a5/2dbca57f28cd90670e85808c9489bfbe.jpg" },
    { id: 9, name: "PATCHOULI & FIG", price: 135, img: "https://i.pinimg.com/736x/6d/5d/d3/6d5dd33bd43d75ac60ca6fe3ed45cb4b.jpg" },
    { id: 10, name: "CEDARWOOD & SAGE", price: 125, img: "https://i.pinimg.com/736x/cb/6c/8b/cb6c8b5326b6078c82ab9a47dc393a68.jpg" },
    { id: 11, name: "LAVENDER & THYME", price: 115, img: "https://i.pinimg.com/736x/55/a0/f7/55a0f7ae1b5babe618c2821b435f1ad0.jpg" },
    { id: 12, name: "MUSK & ALMOND", price: 155, img: "https://i.pinimg.com/736x/b2/cd/1d/b2cd1d250159ae2ea4fc774aa2ce723e.jpg" }
];

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + parseInt(item.quantity), 0);
    const cartLinks = document.querySelectorAll('.navbar a[href="cart.html"]');
    cartLinks.forEach(link => {
        link.textContent = `CART (${count})`;
    });
}

function addToCart(product, size, quantity) {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id && item.size === size);
    if (existingIndex > -1) {
        cart[existingIndex].quantity = parseInt(cart[existingIndex].quantity) + parseInt(quantity);
    } else {
        cart.push({ ...product, size, quantity: parseInt(quantity) });
    }
    saveCart(cart);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
