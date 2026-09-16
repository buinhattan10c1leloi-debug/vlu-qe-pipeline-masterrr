function login(username, password) {
  // Kiểm tra username
  if (!username || username.trim() === "") {
    throw new Error("Username không được để trống");
  }

  // Kiểm tra password
  if (!password || password.trim() === "") {
    throw new Error("Password không được để trống");
  }

  // Tài khoản bị khóa
  if (username === "locked") {
    throw new Error("Tài khoản đã bị khóa");
  }

  // Password chứa ký tự đặc biệt
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    throw new Error("Password không được chứa ký tự đặc biệt");
  }

  // Kiểm tra thông tin đăng nhập
  if (username === "admin" && password === "123") {
    return true;
  }

  throw new Error("Username hoặc password không đúng");
}

module.exports = { login };
