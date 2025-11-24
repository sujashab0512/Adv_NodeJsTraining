
export function fetchBookDetails(cart) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const books = cart.map(item => item.title);
      resolve(books);
    }, 1000);
  });
}

export function checkStock(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const outOfStock = cart.find(item => item.stock === 0);
      if (outOfStock) {
        reject(`"${outOfStock.title}" is out of stock`);
      } else {
        resolve("All items available");
      }
    }, 1000);
  });
}
