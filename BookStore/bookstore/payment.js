export function processPayment(amount) {
  return amount > 0
    ? Promise.resolve({ transactionId: 56892 })
    : Promise.reject("Payment failed: Invalid amount");
}
