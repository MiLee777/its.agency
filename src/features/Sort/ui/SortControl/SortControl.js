import { Button } from "@/shared/ui/Button/Button";
import { createOverlay } from "@/shared/ui/Overlay/Overlay";
import { SortPopup } from "@/features/Sort/ui/SortPopup/SortPopup";
import styles from "./SortControl.module.scss";
import { ArrowDown } from "@/shared/assets/icons/ArrowDown";
import { Stack } from "@/shared/ui/Stack/Stack";

export function SortControl({ onChange }) {
  let currentSort = "СНАЧАЛА ДОРОГИЕ";

  function onCloseSort() {
    sortOverlay.style.display = "none";
    document.body.style.overflow = "";
  }

  function onOpenSort() {
    const popup = SortPopup({
      current: currentSort,
      onSelect: (value) => {
        currentSort = value;
        sortButton.innerText = value;
        onChange(value);
        onCloseSort();
      },
    });

    sortOverlay.innerHTML = "";
    sortOverlay.appendChild(popup);
    sortOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  const sortOverlay = createOverlay(null, onCloseSort);
  sortOverlay.style.display = "none";

  const sortButton = Button({
    text: currentSort,
    className: styles.sortButton,
    onClick: onOpenSort,
  });

  const arrowDown = ArrowDown();

  const sortBtnWrapper = Stack({
    align: "center",
    gap: 4,
    children: [sortButton, arrowDown],
  })

  return {
    element: sortBtnWrapper,
    overlay: sortOverlay,
  };
}
