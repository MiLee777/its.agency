import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { CartProductItem } from "./CartProductItem";
import { clearCart } from "../../lib/cartState";
import { Typography } from "@/shared/ui/Typography/Typography";
import { CartFooter } from "./CartFooter";
import styles from "./CartModal.module.scss";

export function CartProductList() {
  const productsCount = Typography({
    fontStyle: "inter400",
    children: "",
  });

  const clearBtn = Button({
    variant: "grey",
    text: "ОЧИСТИТЬ СПИСОК",
    onClick: () => clearCart(),
  });

  const header = Stack({
    justify: "between",
    children: [productsCount, clearBtn],
  });

  const list = Stack({
    direction: "column",
    gap: 12,
  });

  const content = Stack({
    direction: "column",
    gap: 10,
    children: [header, list],
  })

  const footer = CartFooter();

  const el = Stack({
    direction: "column",
    justify: "between",
    gap: 40,
    className: styles.modal__content,
    children: [content, footer.el],
  });

  function render(cart) {
    list.innerHTML = "";
    productsCount.textContent = `${cart.length} товаров`;
    cart.forEach((item) => {
      const itemEl = CartProductItem(item);
      list.appendChild(itemEl);
    });

    footer.updateTotal(cart);
  }

  return { el, render };
}
