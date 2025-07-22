import { Logo } from "@/shared/assets/icons/LogoIcon";
import { Stack } from "@/shared/ui/Stack/Stack";
import styles from "./HeaderMobile.module.scss";
import { BurgerButton } from "@/shared/ui/BurgerButton/BurgerButton";
import { MobileMenuPopup } from "../../../MobileMenuPopup/ui/MobileMenuPopup/MobileMenuPopup";
import { CartButton } from "@/entities/Cart/ui/CartButton/CartButton";

export function HeaderMobile() {
  const logo = Logo();
  const cart = CartButton();

  let menuOpen = false;
  let popup = null;

  const burger = BurgerButton({
    isOpen: menuOpen,
    onClick: () => {
      menuOpen = !menuOpen;

      burger.setOpen(menuOpen);

      if (menuOpen) {
        popup = MobileMenuPopup({
          onClose: () => {
            menuOpen = false;
            burger.setOpen(false);
            popup.remove();
          },
        });
        document.body.appendChild(popup);
      } else {
        popup?.remove();
      }
    },
  });

  const header = Stack({
    tag: "header",
    justify: "between",
    align: "center",
    className: styles.header,
    children: [burger, logo, cart]
  });

  return header;
}