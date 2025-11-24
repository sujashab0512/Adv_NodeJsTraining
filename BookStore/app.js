import { fetchBookDetails,checkStock } from "./bookstore/inventory.js";

import { processPayment } from "./bookstore/payment.js";
import { login } from "./auth/auth.js";
import { log } from "./utils/logger.js";
import {cart} from "./bookstore/cart.js";

async function processOrder(username, password, cart) {
  try {
    
    const user = await login(username, password);
    log(`User login successful: User ID ${user.userId}`);

    
    const books = await fetchBookDetails(cart);
    log(`Book details fetched: ${JSON.stringify(books)}`);

    
    await checkStock(cart);
    log("Stock checked: All items available");

    
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    const payment = await processPayment(totalAmount);
    log(`Payment successful: Transaction ID ${payment.transactionId}`);

    
    const invoiceId = "INV" + Math.floor(Math.random() * 10000);
    log(`Invoice generated: Invoice #${invoiceId}`);
    log(`Confirmation email sent to: ${user.email}`);

  } catch (error) {
    log(`Order processing stopped: ${error}`, "error");
  }
}

// Sample Execution

processOrder("admin", "admin123", cart);

