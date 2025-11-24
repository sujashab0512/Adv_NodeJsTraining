
export function login(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        resolve({ userId: 101, email: "user@example.com" });
      } 
    }, 1000);
  });
}
