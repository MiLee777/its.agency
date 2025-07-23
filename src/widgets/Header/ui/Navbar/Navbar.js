import { Stack } from "@/shared/ui/Stack/Stack";
import { navData } from "../../lib/data";
import { Link } from "@/shared/ui/Link/Link";
import styles from "./Navbar.module.scss";

export function Navbar() {
  const links = navData.map(({text, href}) =>
    Link({ text, href })
  );

  const nav = Stack({
    tag: "nav",
    gap: 24,
    className: styles.nav,
    children: links,
  });

  return nav;
}