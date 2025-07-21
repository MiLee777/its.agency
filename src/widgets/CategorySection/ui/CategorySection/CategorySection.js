import { CategoryList } from "@/features/CategoryFilter/ui/CategoryList/CategoryList";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./CategorySection.module.scss";
import { CategoryContent } from "../../../CategoryContent/ui/CategoryContent/CategoryContent";
import { subscribeToResize, getWidth } from "@/shared/lib/getResize";

export function CategorySection() {
  const categoryList = CategoryList();
  const categoryContent = CategoryContent();

  const categorySection = Stack({
    tag: "section",
    justify: "between",
    max: true,
    className: styles.category,
    children: [],
  });

  function updateView(width) {
    categorySection.innerHTML = "";

    if (width >= 900) {
      categorySection.appendChild(categoryList);
      categorySection.appendChild(categoryContent);
    } else {
      categorySection.appendChild(categoryContent);
    }
  }

  subscribeToResize(updateView);
  updateView(getWidth());

  return categorySection;
}