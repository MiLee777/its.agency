import { createOverlay } from "@/shared/ui/Overlay/Overlay";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Navbar } from "../../../Header/ui/Navbar/Navbar";
import styles from "./MobileMenuPopup.module.scss";

export function MobileMenuPopup({ onClose }) {
  const nav = Navbar();

  const container = Stack({
    className: styles.menu,
    children: [nav],
  });

  const popup = createOverlay(container, onClose);
  popup.style.display = "block";

  document.body.classList.add("no-scroll");
  popup.destroy = () => {
    document.body.classList.remove("no-scroll");
    popup.remove();
  };

  return popup;
}
