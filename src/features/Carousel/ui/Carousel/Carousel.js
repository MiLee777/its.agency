import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import { Button } from "@/shared/ui/Button/Button";
import styles from "./Carousel.module.scss";
import { slidesData } from "../../lib/data";
import { ArrowLeft } from "@/shared/assets/icons/ArrowLeft";
import { ArrowRight } from "@/shared/assets/icons/ArrowRight";
import { BreadCrumbs } from "@/shared/ui/BreadCrumbs/BreadCrumbs";

export function Carousel() {
  const carousel = Stack({
    direction: "column",
    className: styles.carousel,
    children: []
  });

  const breadCrumbs = BreadCrumbs();

  const carouselInner = Stack({
    className: styles.carousel__inner,
    children: []
  });

  if (!slidesData.length) return null;

  slidesData.forEach((slide, index) => {
    const title = Typography({
      as: "h1",
      fontStyle: "inter300",
      color: "white",
      align: "center",
      className: styles.carousel__title,
      children: slide.title
    });

    const subtitle = Typography({
      as: "p",
      fontStyle: "inter300",
      color: "white",
      align: "center",
      className: styles.carousel__subtitle,
      children: slide.subtitle
    });

    const content = Stack({
      direction: "column",
      align: "center",
      justify: "center",
      gap: 24,
      className: styles.carousel__slideContent,
      children: [title, subtitle]
    });

    const slideElement = Stack({
      justify: "center",
      align: "center",
      className: `${styles.carousel__slide} ${index === 0 ? styles.active : ''}`,
      children: [content],
    });
    slideElement.style.backgroundImage = `url(${slide.image})`;

    carouselInner.appendChild(slideElement);
  });

  const AUTO_SLIDE_DELAY = 5000;

  const prevButton = Button({
    className: `${styles.carousel__nav} ${styles.prev}`,
    children: ArrowLeft(),
    onClick: () => prevSlide()
  });

  const nextButton = Button({
    className: `${styles.carousel__nav} ${styles.next}`,
    children: ArrowRight(),
    onClick: () => nextSlide()
  });

  const pagination = Stack({
    gap: 8,
    className: styles.carousel__pagination,
    children: []
  });

  slidesData.forEach((_, index) => {
    const bullet = document.createElement("div");
    bullet.className = `${styles.bullet} ${index === 0 ? styles.active : ''}`;
    bullet.addEventListener("click", () => goToSlide(index));
    pagination.appendChild(bullet);
  });

  carousel.append(breadCrumbs, carouselInner, prevButton, nextButton, pagination);

  let currentIndex = 0;
  const slides = carouselInner.querySelectorAll(`.${styles.carousel__slide}`);
  const bullets = pagination.querySelectorAll(`.${styles.bullet}`);

  function goToSlide(index) {
    slides[currentIndex].classList.remove(styles.active);
    bullets[currentIndex].classList.remove(styles.active);

    currentIndex = index;

    slides[currentIndex].classList.add(styles.active);
    bullets[currentIndex].classList.add(styles.active);
  }

  function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    goToSlide(newIndex);
  }

  function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  }

  let interval = setInterval(nextSlide, AUTO_SLIDE_DELAY);

  carousel.addEventListener("mouseenter", () => clearInterval(interval));
  carousel.addEventListener("mouseleave", () => interval = setInterval(nextSlide, AUTO_SLIDE_DELAY));

  return carousel;
}