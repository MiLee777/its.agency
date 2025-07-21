import { Stack } from "@/shared/ui/Stack/Stack";
import { CategoryList } from "@/features/CategoryFilter/ui/CategoryList/CategoryList";
import styles from "./CategoryPopup.module.scss";

export function CategoryPopup({ onClose }) {
  const dragIndicator = Stack({ 
    className: 
    styles.popup__dragIndicator, 
  });

  const popup = Stack({
    direction: "column",
    gap: 38,
    className: styles.popup,
    children: [dragIndicator, CategoryList()],
  });

  let startY = 0;
  let endY = 0;

  popup.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
  });

  popup.addEventListener("touchmove", (e) => {
    endY = e.touches[0].clientY;
  });

  popup.addEventListener("touchend", () => {
    const swipeDistance = endY - startY;
    if (swipeDistance > 50) onClose();
    startY = endY = 0;
  });

  return popup;
}
