import { CategoryList } from "@/features/CategoryFilter/ui/CategoryList/CategoryList";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./CategorySection.module.scss";
import { CategoryContent } from "../../../CategoryContent/ui/CategoryContent/CategoryContent";
import { subscribeToResize, getWidth } from "@/shared/lib/getResize";

export function CategorySection() {
  const categoryList = CategoryList();

  const categorySection = Stack({
    tag: "section",
    justify: "between",
    gap: 24,
    className: styles.category,
    children: [],
  });

  let categoryContent = null;

  async function initContent() {
    categoryContent = await CategoryContent();
    updateView(getWidth());
  }

  function updateView(width) {
    categorySection.innerHTML = "";

    if (width >= 1024) {
      categorySection.appendChild(categoryList);
      if (categoryContent) categorySection.appendChild(categoryContent);
    } else {
      if (categoryContent) categorySection.appendChild(categoryContent);
    }
  }

  subscribeToResize(updateView);

  initContent();

  return categorySection;
}