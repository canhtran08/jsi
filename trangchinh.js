// Giỏ hàng lưu trữ sản phẩm
let cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Hàm cập nhật giỏ hàng và tổng giá trị
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");

    // Làm sạch danh sách giỏ hàng
    cartList.innerHTML = "";

    let totalPrice = 0;
    cart.forEach((product, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
            <strong>${product.name}</strong> - ${product.price.toLocaleString()} VND
            <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(${index})">Xoá</button>
        `;
        cartList.appendChild(li);
        totalPrice += product.price;
    });

    totalPriceElement.textContent = totalPrice.toLocaleString();
}

// Thanh toán giỏ hàng
document.getElementById("checkout").addEventListener('click', () => {
    if (cart.length > 0) {
        alert("Thanh toán thành công!");
        cart = [];
        updateCart();
    } else {
        alert("Giỏ hàng trống.");
    }
});

// Thêm sự kiện vào các nút "Add to Cart" trên các sản phẩm
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.card-body');
        const productName = productCard.querySelector('.card-title').textContent;
        const productPrice = parseFloat(productCard.querySelector('.card-text').textContent.replace('Price: ', '').replace('VND', '').replace('.', '').trim());

        const product = {
            name: productName,
            price: productPrice
        };

        addToCart(product);
    });
});

// Tính năng cuộn lên
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});