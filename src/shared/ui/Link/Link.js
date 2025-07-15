import styles from "./Link.module.scss";
import { getStyles } from "../../lib/getStyles.js";

export function Link({
  text = "",
  href = "#",
  external = false,
  className = "",
  ...attrs
} = {}) {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = text;

  if (external) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }

  const additional = className.split(" ").map(cls => styles[cls] || cls);

  a.classList.add(...getStyles(styles.link, {}, additional));

  for (const [key, value] of Object.entries(attrs)) {
    a.setAttribute(key, value);
  }

  return a;
}
