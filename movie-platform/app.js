
import { login } from "./auth/auth.js";
import { getWatchlist,addToWatchlist } from "./watchlist/watchlist.js";
import { loadCatalogMovies } from "./catalog/movies.js";
//import { loadCatalog } from "./catalog/movies.js";
import { logInfo } from "./utils/logger.js";

async function init() {
  logInfo("App initialized successfully");

  try {
    // Step 1: User Login
    const user = login("admin", "admin123");
    logInfo(`User logged in: ID ${user.userId}`);

    // Step 2: Load Movie Catalog
    const catalog = loadCatalogMovies();
    logInfo(`Movie catalog loaded: ${JSON.stringify(catalog)}`);

    // Step 3: Load Watchlist
    const watchlist = getWatchlist();
    logInfo(`Watchlist loaded: ${JSON.stringify(watchlist)}`);

    // Step 4: Dynamic Import for Recommendations
    logInfo("User clicked 'Recommended' → loading recommendation engine dynamically");
    const recommendModule = await import("./recommendations/recommend.js");
    const recommendations = recommendModule.getRecommendations();
    logInfo(`Recommended movies: ${JSON.stringify(recommendations)}`);

    // Add a recommended movie to watchlist
    addToWatchlist("Dune");
    logInfo(`User added "Dune" to watchlist`);

    // Step 5: Dynamic Import for Payment
    logInfo("Loading payment module for subscription checkout");
    const paymentModule = await import("./payment/payment.js");
    const paymentResult = paymentModule.processPayment(499);
    logInfo(`Payment successful: Transaction ID ${paymentResult.transactionId}`);

  } catch (error) {
    log(`Error: ${error.message}`, "ERROR");
  }
}

init();
