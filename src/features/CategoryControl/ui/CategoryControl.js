import { Button } from "@/shared/ui/Button/Button";
import { createOverlay } from "@/shared/ui/Overlay/Overlay";
import { CategoryPopup } from "@/widgets/CategoryPopup/ui/CategoryPopup/CategoryPopup";
import styles from "./CategoryControl.module.scss";

export function CategoryControl() {
  function onClose() {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  }

  function onOpen() {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  const popup = CategoryPopup({ onClose });
  const overlay = createOverlay(popup, onClose);
  overlay.style.display = "none";

  const openButton = Button({
    text: "ФИЛЬТРЫ",
    className: styles.filterButton,
    onClick: onOpen,
  });

  return {
    element: openButton,
    overlay,
    open: onOpen,
  };
}

