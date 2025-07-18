import { Button } from "@/shared/ui/Button/Button";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import { getCategory, setCategory, subscribe, unsubscribe } from "../../lib/categoryStore";
import styles from "./CategoryList.module.scss";
import { categories } from "../../lib/data";

export function CategoryList() {
  const container = Stack({
    tag: "ul",
    direction: "column",
    gap: 10,
    children: [],
  });

  const wrappersMap = new Map();

  function renderActiveState() {
    const selected = getCategory();

    wrappersMap.forEach((wrapper, category) => {
      const btn = wrapper.querySelector("button");
      const li = wrapper.querySelector("li");

      const isActive = selected.includes(category);

      btn.classList.toggle(styles.active, isActive);
      btn.setAttribute("aria-pressed", String(isActive));
      li.classList.toggle(styles.active, isActive);
    });
  }

  categories.forEach((category) => {
    const btn = Button({
      variant: "toggle",
      onClick: () => {
        setCategory(category);
      },
    });

    const li = Typography({
      as: "li",
      className: styles.categoryList__item,
      children: category,
    });

    const wrapper = Stack({
      align: "center",
      gap: 12,
      children: [btn, li],
    });

    wrappersMap.set(category, wrapper);
    container.appendChild(wrapper);
  });

  renderActiveState();

  const rerender = () => renderActiveState();
  subscribe(rerender);

  container.destroy = () => {
    unsubscribe(rerender);
  };

  return container;
}
