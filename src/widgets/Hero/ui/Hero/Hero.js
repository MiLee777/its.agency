import { Carousel } from "@/features/Carousel/ui/Carousel/Carousel";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./Hero.module.scss";

export function Hero() {
  const carousel = Carousel();

  const hero = Stack({
    tag: "section",
    className: styles.hero,
    children: [carousel],
  });

  return hero;
}