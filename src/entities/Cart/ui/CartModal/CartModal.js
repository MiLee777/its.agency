import { Stack } from "@/shared/ui/Stack/Stack";
import { createOverlay } from "@/shared/ui/Overlay/Overlay";
import { getCart, subscribe } from "../../lib/cartState";
import { CartHeader } from "./CartHeader";
import { CartProductList } from "./CartProductList";
import styles from "./CartModal.module.scss";

export function CartModal(onClose) {
  const modal = Stack({
    direction: "column",
    gap: 94,
    className: styles.modal,
  });

  const productList = CartProductList();
  const header = CartHeader(() => {
    overlay.remove();
    onClose?.();
  });

  function updateUI() {
    const cart = getCart();
    productList.render(cart);
  }

  subscribe(updateUI);
  updateUI();

  modal.append(header, productList.el);

  const overlay = createOverlay(modal, () => {
    overlay.remove();
    onClose?.();
  });

  overlay.style.display = "flex";
  return overlay;
}
