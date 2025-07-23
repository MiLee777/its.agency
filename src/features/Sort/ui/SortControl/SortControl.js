import { Button } from "@/shared/ui/Button/Button";
import { SortPopup } from "@/features/Sort/ui/SortPopup/SortPopup";
import styles from "./SortControl.module.scss";
import { ArrowDown } from "@/shared/assets/icons/ArrowDown";
import { Stack } from "@/shared/ui/Stack/Stack";

export function SortControl({ onChange }) {
  let currentSort = "СНАЧАЛА ДОРОГИЕ";
  let isOpen = false;
  let overlayEl = null;

  const sortButton = Button({
    text: currentSort,
    onClick: togglePopup,
  });

  const arrowDown = ArrowDown();

  const popupWrapper = Stack({
    className: styles.popupWrapper,
    children: [],
  });

  const sortBtnWrapper = Stack({
    direction: "column",
    className: styles.sortControl,
    children: [
      Stack({
        align: "center",
        gap: 4,
        children: [sortButton, arrowDown],
      }),
      popupWrapper,
    ],
  });

  function togglePopup() {
    if (isOpen) {
      closePopup();
    } else {
      openPopup();
    }
  }

  function openPopup() {
    const popup = SortPopup({
      current: currentSort,
      onSelect: (value) => {
        currentSort = value;
        sortButton.innerText = value;
        onChange(value);
        closePopup();
      },
    });

    popupWrapper.innerHTML = "";
    popupWrapper.appendChild(popup);

    overlayEl = Stack({
      className: styles.overlay,
    });

    document.body.appendChild(overlayEl);
    overlayEl.addEventListener("click", closePopup);

    isOpen = true;
  }

  function closePopup() {
    popupWrapper.innerHTML = "";
    overlayEl?.remove();
    overlayEl = null;
    isOpen = false;
  }

  return {
    element: sortBtnWrapper,
  };
}
