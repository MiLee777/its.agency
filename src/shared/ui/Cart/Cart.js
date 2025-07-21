import { Typography } from "../Typography/Typography";
import styles from "./Cart.module.scss";

export function Cart() {
  const cart = Typography({
    as: "p",
    fontStyle: "inter500",
    align: "center",
    size: 12,
    className: styles.cart,
    children: "0",
  });

  return cart;
}