import { Button } from "../Button/Button";
import styles from "./BurgerButton.module.scss";

export function BurgerButton({ isOpen, onClick }) {
  const lines = Array.from({ length: 3 }, () => {
    const span = document.createElement("span");
    return span;
  });

  const button = Button({
    className: styles.burger,
    onClick,
    children: lines,
  });
  if (isOpen) button.classList.add(styles.open);

  button.addEventListener("click", onClick);

  button.setOpen = (value) => {
    if (value) {
      button.classList.add(styles.open);
    } else {
      button.classList.remove(styles.open);
    }
  };

  return button;
}
