
export function log(message, type = "info") {
  const prefix = type === "error" ? "❌" : "✔";
  console.log(`${prefix} ${message}`);
}
