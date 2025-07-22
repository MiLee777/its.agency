import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Button } from "@/shared/ui/Button/Button";
import { Image } from "@/shared/ui/Image/Image";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../lib/cartState";
import styles from "./CartModal.module.scss";

export function CartProductItem(item) {
  const quantityControl = Stack({
    gap: 8,
    align: "center",
    children: [
      Button({
        text: "−",
        variant: "greySquare",
        onClick: () => decreaseQuantity(item._id),
      }),
      Typography({ children: String(item.count) }),
      Button({
        text: "+",
        variant: "greySquare",
        onClick: () => increaseQuantity(item._id),
      }),
    ],
  });

  return Stack({
    justify: "between",
    align: "center",
    gap: 10,
    className: styles.content__row,
    children: [
      Stack({
        align: "center",
        gap: 8,
        children: [
          Image({ src: item.img, alt: item.title, className: styles.content_img }),
          Stack({
            direction: "column",
            gap: 16,
            children: [
              Typography({ className: styles.content__title, children: item.title }),
              Typography({ fontStyle: "inter600", children: `${item.price} ₽` }),
            ],
          }),
        ],
      }),
      quantityControl,
      Button({
        text: "✕",
        onClick: () => removeFromCart(item._id),
      }),
    ],
  });
}
