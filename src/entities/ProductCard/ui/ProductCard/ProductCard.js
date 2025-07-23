import { Button } from "@/shared/ui/Button/Button";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import styles from "./ProductCard.module.scss";
import { Image } from "@/shared/ui/Image/Image";
import { addToCart } from "../../../Cart/lib/cartState";

export function ProductCard({ product, isFull }) {
  const image = Image({
    src: product.img,
    alt: product.title,
    className: styles.product__img,
    "data-full": isFull,
  });

  const imgContainer = Stack({
    justify: "center",
    align: "center",
    className: styles.product__img,
    children: [image],
  });

  const title = Typography({
    className: styles.title,
    children: product.title,
  });

  const price = Typography({
    fontStyle: "inter600",
    children: `${product.price} ₽`,
  });

  const addToCartBtn = Button({
    variant: "green",
    text: "+",
    onClick: () => {
      addToCart(product);
      showMessage();
    },
    className: styles.product__btn,
  })

  const priceContainer = Stack({
    justify: "between",
    children: [price, addToCartBtn],
  });

  const line = document.createElement("hr");
  line.className = styles.product__line;

  const message = document.createElement("div");
  message.className = styles.product__message;
  message.textContent = "Добавлено в корзину";
  message.style.opacity = "0";

  function showMessage() {
    message.style.opacity = "1";
    setTimeout(() => {
      message.style.opacity = "0";
    }, 1500);
  }


  const card = Stack({
    direction: "column",
    gap: 16,
    className: styles.product,
    children: [imgContainer, title, priceContainer, line, message],
  });

  return card;
}