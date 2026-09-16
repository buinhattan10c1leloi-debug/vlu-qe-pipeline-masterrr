function login(username, password) {
  // Kiểm tra username rỗng hoặc chỉ chứa khoảng trắng tinh thơm
  if (!username || username.trim() === "") {
    throw new Error("Username không được để trống");
  }

  // Kiểm tra password rỗng hoặc chỉ chứa khoảng trắng
  if (!password || password.trim() === "") {
    throw new Error("Password không được để trống");
  }

  // Kiểm tra mật khẩu chứa ký tự đặc biệt
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
  if (specialChars.test(password)) {
    throw new Error("Password không được chứa ký tự đặc biệt");
  }

  // Kiểm tra tài khoản bị khóa
  if (username === "locked") {
    throw new Error("Tài khoản đã bị khóa");
  }

  // Kiểm tra trường hợp đăng nhập thành công (Dùng cho Smoke Test)
  if (username === "admin" && password === "123") {
    return true;
  }

  // Các trường hợp sai thông tin còn lại
  throw new Error("Username hoặc password không đúng");
}

module.exports = { login };
