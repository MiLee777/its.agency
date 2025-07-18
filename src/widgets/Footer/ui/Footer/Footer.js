import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./Footer.module.scss";

export function Footer() {
  const footer = Stack({
    tag: "footer",
    className: styles.footer,
  });

  return footer;
}