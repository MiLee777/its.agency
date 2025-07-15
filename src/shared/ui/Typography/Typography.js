import { getStyles } from "../../lib/getStyles.js";
import styles from "./Typography.module.scss";

export function Typography({
  as = "p",
  fontStyle = "montserrat500",
  color = "dark",
  align = "start",
  size,
  className = "",
  children = "\u00A0", // &nbsp;
  ...attrs
} = {}) {
  const el = document.createElement(as);

  const defaultSizeClass = sizeMap[as] ? styles[sizeMap[as]] : null;
  const useCustomSize = (as === "p" || as === "span") && size;
  const sizeClass = useCustomSize ? styles[`size${size}`] : defaultSizeClass;

  const classes = getStyles(styles.typography, {}, [
    styles[fontStyle],
    styles[color],
    styles[align],
    sizeClass,
    ...className.split(" ").map(c => styles[c] || c).filter(Boolean)
  ]);

  el.classList.add(...classes);

  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }

  if (typeof children === "string") {
    el.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach(child => el.appendChild(child));
  }

  return el;
}

const sizeMap = {
  h1: "size72",
  h2: "size36",
  h3: "size16",
  li: "size12",
  p: "size16",
  span: "size16"
};