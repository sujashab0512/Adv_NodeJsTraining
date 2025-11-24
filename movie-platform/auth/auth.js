
export function login(username, password) {
  if (username === "admin" && password === "admin123") {
    return { userId: 202, name: "John Doe" };
  } else {
    throw new Error("Invalid credentials");
  }
}
