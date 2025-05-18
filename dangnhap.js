// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Giả sử thông tin đăng nhập đúng là username: admin, password: 1234
//     if (username === 'admin' && password === '1234') {
//         // Lưu trạng thái đăng nhập vào localStorage hoặc sessionStorage
//         sessionStorage.setItem('isLoggedIn', 'true');
//         window.location.href = 'index.html'; // Chuyển hướng về trang chính
//     } else {
//         document.getElementById('error-message').style.display = 'block';
//     }
// });