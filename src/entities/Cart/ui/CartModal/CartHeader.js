import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./CartModal.module.scss";

export function CartHeader(onClose) {
  const title = Typography({
    as: "h2",
    fontStyle: "inter300",
    children: "Корзина",
    className: styles.modal__title,
  });

  const closeBtn = Button({
    text: "×",
    className: styles.modal__closeBtn,
    onClick: onClose,
  });

  return Stack({
    justify: "between",
    align: "center",
    children: [title, closeBtn],
  });
}