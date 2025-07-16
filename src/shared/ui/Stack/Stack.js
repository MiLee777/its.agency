import { getStyles } from "../../lib/getStyles";
import styles from "./Stack.module.scss";

export function Stack({
  tag = "div",
  direction = "row",
  align = "stretch",
  justify = "start",
  gap,
  wrap = false,
  max = false,
  className = "",
  children = [],
  ...attrs
} = {}) {
  const el = document.createElement(tag);

  const directionClass = {
    row: styles.directionRow,
    column: styles.directionColumn,
  }[direction];

  const justifyClass = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
  }[justify];

  const alignClass = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
    stretch: styles.alignStretch,
  }[align];

  const gapClass = gap ? styles[`gap${gap}`] : undefined;

  const mods = {
    [styles.wrap]: wrap,
    [styles.max]: max,
  };

  const additional = [
    directionClass,
    justifyClass,
    alignClass,
    gapClass,
    ...className.split(" ").filter(Boolean),
  ];

  const classes = getStyles(styles.flex, mods, additional);

  el.classList.add(...classes);

  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }

  if (typeof children === "string") {
    el.innerHTML = children;
  } else {
    children.forEach((child) => el.appendChild(child));
  }

  return el;
}
