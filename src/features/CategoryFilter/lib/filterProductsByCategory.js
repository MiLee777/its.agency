export function filterProductsByCategory(products, selectedCategories) {
  if (!selectedCategories || selectedCategories.length === 0) return products;

  const hasInStock = selectedCategories.includes("Есть в наличии");
  const otherCategories = selectedCategories.filter(cat => cat !== "Есть в наличии");

  return products.filter(product => {
    if (hasInStock && !product.inStock) {
      return false;
    }

    if (otherCategories.length > 0 && !otherCategories.includes(product.category)) {
      return false;
    }

    return true;
  });
}

