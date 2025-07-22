import { Carousel } from "@/features/Carousel/ui/Carousel/Carousel";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./Hero.module.scss";
import { BreadCrumbs } from "@/shared/ui/BreadCrumbs/BreadCrumbs";
import { getWidth, subscribeToResize, unsubscribeFromResize } from "@/shared/lib/getResize";
import { Typography } from "@/shared/ui/Typography/Typography";

export function Hero() {
  const hero = Stack({
    tag: "section",
    className: styles.hero,
  });

  let currentComponent = null;

  const title = Typography({
    fontStyle: "inter400",
    size: 36,
    className: styles.title,
    children: "КРАСКИ",
  })

  const container = Stack({
    direction: "column",
    gap: 44,
    children: [BreadCrumbs(), title]
  })

  function render(width) {
    const isDesktop = width >= 820;

    const newComponent = isDesktop ? Carousel() : container;

    if (currentComponent) {
      hero.removeChild(currentComponent);
    }

    currentComponent = newComponent;
    hero.appendChild(currentComponent);
  }

  render(getWidth());

  const onResize = (width) => render(width);
  subscribeToResize(onResize);

  hero.destroy = () => {
    unsubscribeFromResize(onResize);
  };

  return hero;
}