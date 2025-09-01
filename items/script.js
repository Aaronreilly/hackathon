// Simple search functionality
document.querySelector('.search-bar input').addEventListener('keyup', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const description = card.querySelector('.product-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Filter by stock availability
const stockFilter = document.querySelectorAll('.filter-options input')[5]; // In Stock checkbox
stockFilter.addEventListener('change', function() {
    const productCards = document.querySelectorAll('.product-card');
    const showInStock = stockFilter.checked;
    
    productCards.forEach(card => {
        const stockElement = card.querySelector('.product-stock');
        if (stockElement.classList.contains('in-stock') || stockElement.classList.contains('low-stock')) {
            card.style.display = showInStock ? 'block' : 'none';
        }
    });
});

// Price range filter simulation
const priceRange = document.querySelector('.price-range');
priceRange.addEventListener('change', function() {
    const maxPrice = parseInt(this.value);
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const priceText = card.querySelector('.product-price').textContent;
        const price = parseInt(priceText.replace(/[^0-9]/g, ''));
        
        if (price <= maxPrice) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
