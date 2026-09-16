const { login } = require("./auth");

describe("Regression Test - Login", () => {
  test("Mật khẩu sai", () => {
    expect(() => login("admin", "wrong-password"))
      .toThrow("Username hoặc password không đúng");
  });

  test("Username rỗng", () => {
    expect(() => login("", "123"))
      .toThrow("Username không được để trống");
  });

  test("Username chỉ chứa khoảng trắng", () => {
    expect(() => login("   ", "123"))
      .toThrow("Username không được để trống");
  });

  test("Password rỗng", () => {
    expect(() => login("admin", ""))
      .toThrow("Password không được để trống");
  });

  test("Password chỉ chứa khoảng trắng", () => {
    expect(() => login("admin", "   "))
      .toThrow("Password không được để trống");
  });

  test("Password chứa ký tự đặc biệt", () => {
    expect(() => login("admin", "123@"))
      .toThrow("Password không được chứa ký tự đặc biệt");
  });

  test("Password chứa ký tự đặc biệt khác", () => {
    expect(() => login("admin", "12#3"))
      .toThrow("Password không được chứa ký tự đặc biệt");
  });

  test("Tài khoản bị khóa", () => {
    expect(() => login("locked", "123"))
      .toThrow("Tài khoản đã bị khóa");
  });

  test("Username không tồn tại", () => {
    expect(() => login("unknown", "123"))
      .toThrow("Username hoặc password không đúng");
  });

  test("Username đúng nhưng password sai", () => {
    expect(() => login("admin", "456"))
      .toThrow("Username hoặc password không đúng");
  });
});
