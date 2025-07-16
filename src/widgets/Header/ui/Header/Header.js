import { Navbar } from "../Navbar/Navbar";
import { Logo } from "@/shared/assets/icons/LogoIcon";
import { Link } from "@/shared/ui/Link/Link";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import styles from "./Header.module.scss";
import { UserPanel } from "../UserPanel/UserPanel";

export function Header() {
  const logo = Logo();
  const nav = Navbar();

  const tel = Link({
    text: "+7 (495) 221-77-69",
    href: "tel:+74952217769"
  });

  const telText = Typography({
    fontStyle: "inter400",
    size: 14,
    className: styles.header__tel,
    children: "Заказать звонок",
  });

  const callBack = Stack({
    direction: "column",
    gap: "2",
    children: [tel, telText],
  });

  const userPanel = UserPanel();

  const header = Stack({
    tag: "header",
    justify: "between",
    align: "center", 
    className: styles.header,
    children: [logo, nav, callBack, userPanel]
  });

  return header;
}