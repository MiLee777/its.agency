import { Typography } from "@/shared/ui/Typography/Typography";
import styles from "./CartButton.module.scss";
import { getCart, subscribe } from "../../lib/cartState";
import { CartModal } from "../CartModal/CartModal";

export function CartButton() {
  const count = getCart().reduce((acc, item) => acc + item.count, 0);

  const cart = Typography({
    as: "p",
    fontStyle: "inter500",
    align: "center",
    size: 12,
    className: styles.cart,
    children: String(count),
  });

  subscribe((cartItems) => {
    cart.textContent = cartItems.reduce((acc, item) => acc + item.count, 0);
  });

  cart.addEventListener("click", () => {
    const modal = CartModal(() => {
      document.body.style.overflow = "";
    });
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
  });

  return cart;
}