document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerText = 'Mật khẩu không khớp!';
    } else if (!username || !email || !password) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerText = 'Vui lòng điền đầy đủ thông tin!';
    } else {
        // Giả sử đăng ký thành công
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = './dangnhap.html'; // Chuyển hướng về trang chính
    }
});