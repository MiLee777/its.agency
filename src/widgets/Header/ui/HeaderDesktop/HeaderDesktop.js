import { Navbar } from "../Navbar/Navbar";
import { Logo } from "@/shared/assets/icons/LogoIcon";
import { Link } from "@/shared/ui/Link/Link";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import styles from "./HeaderDesktop.module.scss";
import { UserPanel } from "../UserPanel/UserPanel";
import { getWidth, subscribeToResize, unsubscribeFromResize } from "@/shared/lib/getResize";

export function HeaderDesktop() {
  const logo = Logo();
  const nav = Navbar();

  const linksWrapper = Stack({
    align: "center",
    children: [logo, nav],
  });

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

  const panelsWrapper = Stack({
    align: "center",
    children: [callBack, userPanel]
  });

  const header = Stack({
    tag: "header",
    justify: "between",
    align: "center",
    className: styles.header,
    children: [linksWrapper, panelsWrapper]
  });

  function updateGaps(width) {
    if (width < 1150) {
      linksWrapper.style.gap = "10px";
      panelsWrapper.style.gap = "20px";
    } else if (width < 1280) {
      linksWrapper.style.gap = "60px";
      panelsWrapper.style.gap = "40px";
    } else if (width < 1440) {
      linksWrapper.style.gap = "120px";
      panelsWrapper.style.gap = "80px";
    } else {
      linksWrapper.style.gap = "172px";
      panelsWrapper.style.gap = "116px";
    }
  }

  const handleResize = (width) => updateGaps(width);

  subscribeToResize(handleResize);
  updateGaps(getWidth());

  header.destroy = () => {
    unsubscribeFromResize(handleResize);
  };

  return header;
}