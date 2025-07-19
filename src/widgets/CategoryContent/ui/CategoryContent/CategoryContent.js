import { Stack } from "@/shared/ui/Stack/Stack";
import { CategoryItems } from "../../../CategoryItems/ui/CategoryItems/CategoryItems";
import { Typography } from "@/shared/ui/Typography/Typography";
import { productData } from "@/entities/ProductCard/lib/data";
import { subscribeToResize, getWidth } from "@/shared/lib/getResize";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./CategoryContent.module.scss";
import { CategoryList } from "@/features/CategoryFilter/ui/CategoryList/CategoryList";

export function CategoryContent() {
  const products = CategoryItems();
  const sorted = Typography({
    fontStyle: "inter600",
    size: 12,
    children: "СНАЧАЛА ДОРОГИЕ",
  });

  const productsHeader = Stack({
    justify: "between",
    children: [],
  });

  const content = Stack({
    direction: "column",
    gap: 44,
    children: [productsHeader, products],
  });

  const popup = Stack({
    className: styles.popup,
    children: [CategoryList()]
  });
  popup.style.display = "none";

  content.appendChild(popup);

  function updateText(width) {
    productsHeader.innerHTML = "";

    let filter;
    if (width < 900) {
      filter = Button({
        text: "ФИЛЬТРЫ",
        className: styles.filterButton,
        onClick: () => {
          popup.style.display = popup.style.display === "none" ? "block" : "none";
        },
      });
    } else {
      filter = Typography({
        fontStyle: "inter600",
        size: 12,
        children: `${productData.length} ТОВАРОВ`,
      });
    }

    productsHeader.appendChild(filter);
    productsHeader.appendChild(sorted);
  }

  subscribeToResize(updateText);
  updateText(getWidth());

  return content;
}