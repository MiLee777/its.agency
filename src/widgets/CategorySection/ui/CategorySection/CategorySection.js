import { CategoryList } from "@/features/CategoryFilter/ui/CategoryList/CategoryList";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./CategorySection.module.scss";
import { CategoryContent } from "../../../CategoryContent/ui/CategoryContent/CategoryContent";

export function CategorySection() {
  const categoryList = CategoryList();
  const categoryContent = CategoryContent();

  const categorySection = Stack({
    tag: "section",
    justify: "between",
    max: true,
    className: styles.category,
    children: [categoryList, categoryContent],
  });

  return categorySection;
}