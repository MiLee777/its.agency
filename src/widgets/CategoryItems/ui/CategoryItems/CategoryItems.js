import { ProductCard } from "@/entities/ProductCard/ui/ProductCard/ProductCard";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./CategoryItems.module.scss";

export function CategoryItems({ items }) {
  const container = Stack({
    gap: 24,
    className: styles.container,
    children: [],
  });

  items.forEach((product) => {
    const isFull = product._id === 1;
    const productCard = ProductCard({ product, isFull });
    container.appendChild(productCard);
  });

  return container;
}