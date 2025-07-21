import styles from "./Button.module.scss";
import { getStyles } from "../../lib/getStyles.js";

export function Button({
  text = "",
  variant = "default",
  size,
  fullWidth = false,
  className = "",
  onClick,
  children,
  ...attrs
} = {}) {
  const btn = document.createElement("button");

  const isToggle = variant === "toggle";

  const mods = {
    [styles.fullWidth]: fullWidth
  };

  const additional = [
    styles[variant],
    styles[size],
    ...className.split(" ").map(cls => styles[cls] || cls)
  ];

  btn.classList.add(...getStyles(styles.button, mods, additional));

  if (isToggle) {
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", () => {
      const isActive = btn.classList.toggle(styles.active);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  if (text) {
    btn.textContent = text;
  } else if (children) {
    if (Array.isArray(children)) {
      children.forEach(child => btn.appendChild(child));
    } else {
      btn.appendChild(children);
    }
  }

  if (typeof onClick === "function") {
    btn.addEventListener("click", onClick);
  }

  for (const [key, value] of Object.entries(attrs)) {
    btn.setAttribute(key, value);
  }

  return btn;
}
