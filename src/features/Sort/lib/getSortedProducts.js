export function getSortedProducts(products, sortKey) {
  const sorted = [...products];

  switch (sortKey) {
    case "СНАЧАЛА ДОРОГИЕ":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "СНАЧАЛА НЕДОРОГИЕ":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "СНАЧАЛА ПОПУЛЯРНЫЕ":
      sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
      break;
    case "СНАЧАЛА НОВЫЕ":
      sorted.sort((a, b) => new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0));
      break;
    default:
      sorted.sort((a, b) => b.price - a.price);
  }

  return sorted;
}
