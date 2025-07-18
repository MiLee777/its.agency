import { productData } from "@/entities/ProductCard/lib/data";
import { ProductCard } from "@/entities/ProductCard/ui/ProductCard/ProductCard";
import { getCategory, subscribe, unsubscribe } from "@/features/CategoryFilter/lib/categoryStore";
import { filterProductsByCategory } from "@/features/CategoryFilter/lib/filterProductsByCategory";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./CategoryItems.module.scss";

export function CategoryItems() {
  const container = Stack({
    gap: 24,
    className: styles.container,
    children: [],
  });

  function render() {
    container.innerHTML = "";

    const selectedCategory = getCategory();
    const filtered = filterProductsByCategory(productData, selectedCategory);

    filtered.forEach((product) => {
      const isFull = product._id === 1;
      const productCard = ProductCard({ product, isFull });
      container.appendChild(productCard);
    });
  }

  render();

  const rerender = () => render();
  subscribe(rerender);

  container.destroy = () => {
    unsubscribe(rerender);
  };

  return container;
}