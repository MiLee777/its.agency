import { Stack } from "@/shared/ui/Stack/Stack";
import { CategoryItems } from "../../../CategoryItems/ui/CategoryItems/CategoryItems";
import { Typography } from "@/shared/ui/Typography/Typography";
import { productData } from "@/entities/ProductCard/lib/data";

export function CategoryContent() {
  const total = Typography({
    fontStyle: "inter600",
    size: 12,
    children: `${productData.length} ТОВАРОВ`,
  });

  const sorted = Typography({
    fontStyle: "inter600",
    size: 12,
    children: "СНАЧАЛА ДОРОГИЕ",
  });

  const productsHeader = Stack({
    justify: "between",
    children: [total, sorted],
  });

  const products = CategoryItems();

  const content = Stack({
    direction: "column",
    gap: 44,
    children: [productsHeader, products],
  });

  return content;
}