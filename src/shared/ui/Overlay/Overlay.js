import { Stack } from "../Stack/Stack";
import styles from "./Overlay.module.scss";

export function createOverlay(child, onClose) {
  const overlay = Stack({
    justify: "center",
    align: "end",
    className: styles.overlay,
  });

  overlay.style.display = "none";

  if (child) overlay.appendChild(child);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      onClose();
    }
  });

  return overlay;
}

