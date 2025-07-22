import { Typography } from "../Typography/Typography";
import styles from "./BreadCrumbs.module.scss";

export function BreadCrumbs() {
  const breadCrumbs = Typography({
    fontStyle: "inter400",
    color: "white",
    size: 10,
    className: styles.breadCrumbs,
    children: "ГЛАВНАЯ • ПРОДУКТЫ • КРАСКИ",
  });
  
  return breadCrumbs;
}