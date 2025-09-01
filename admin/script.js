// Toggle between sections
document.querySelectorAll('.sidebar-menu li').forEach(item => {
    item.addEventListener('click', function() {
        if(this.dataset.target) {
            document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
            this.classList.add('active');

            document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
            document.getElementById(this.dataset.target).classList.add('active');
        }
    });
});

// Login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@example.com' && password === 'admin123') {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
    } else {
        alert('Invalid credentials. Use admin@example.com / admin123');
    }
}

// Logout
function logout() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

// Add product form toggle
document.getElementById('addProductBtn').addEventListener('click', function() {
    document.getElementById('addProductForm').style.display = 'block';
});

function cancelAddProduct() {
    document.getElementById('addProductForm').style.display = 'none';
}

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const stock = document.getElementById('productStock').value;

    if (!name || !price || !stock) {
        alert('Please fill in all required fields');
        return;
    }

    alert(`Product "${name}" added successfully!`);
    document.getElementById('addProductForm').style.display = 'none';

    // Reset form fields
    document.getElementById('productName').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productStock').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productImage').value = '';
}

// Delete product functionality
document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', function() {
        const productName = this.closest('tr').querySelector('td div div').textContent;
        if (confirm(`Are you sure you want to delete "${productName}"?`)) {
            this.closest('tr').remove();
            alert(`Product "${productName}" has been deleted.`);
        }
    });
});
