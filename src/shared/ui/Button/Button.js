import styles from "./Button.module.scss";
import { getStyles } from "../../lib/getStyles.js";

export function Button({
  text = "",
  theme = "default",
  size = "m",
  fullWidth = false,
  className = "",
  onClick,
  ...attrs
} = {}) {
  const btn = document.createElement("button");

  const mods = {
    [styles.fullWidth]: fullWidth
  };

  const additional = [
    styles[theme],
    styles[size],
    ...className.split(" ").map(cls => styles[cls] || cls)
  ];

  btn.classList.add(...getStyles(styles.button, mods, additional));
  btn.textContent = text;

  if (typeof onClick === "function") {
    btn.addEventListener("click", onClick);
  }

  for (const [key, value] of Object.entries(attrs)) {
    btn.setAttribute(key, value);
  }

  return btn;
}
