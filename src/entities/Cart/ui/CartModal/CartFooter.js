import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Button } from "@/shared/ui/Button/Button";

export function CartFooter() {
  const totalText = Typography({
    fontStyle: "inter500",
    size: 30,
    children: "",
  });

  const el = Stack({
    justify: "between",
    children: [
      Stack({
        direction: "column",
        children: [
          Typography({ children: "Итого", fontStyle: "inter400", size: 16 }),
          totalText,
        ],
      }),
      Button({
        variant: "green",
        text: "ОФОРМИТЬ ЗАКАЗ",
        onClick: () => alert("Заказ оформлен!"),
      }),
    ],
  });

  function updateTotal(cart) {
    const total = cart.reduce((sum, i) => sum + i.price * i.count, 0);
    totalText.textContent = `${total}₽`;
  }

  return { el, updateTotal };
}
