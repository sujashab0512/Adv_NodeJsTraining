
let watchlist = ["Inception", "Interstellar"];

export function getWatchlist() {
  return watchlist;
}

export function addToWatchlist(movie) {
  watchlist.push(movie);
  return watchlist;
}
