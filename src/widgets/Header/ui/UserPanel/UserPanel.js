import { SearchIcon } from "@/shared/assets/icons/SearchIcon";
import { UserIcon } from "@/shared/assets/icons/UserIcons";
import { WishlistIcon } from "@/shared/assets/icons/WishlistIcon";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";
import styles from "./UserPanel.module.scss";

export function UserPanel() {
  const search = SearchIcon();
  const user = UserIcon();
  const wishlist = WishlistIcon();

  const cart = Typography({
    as: "p",
    fontStyle: "inter500",
    align: "center",
    size: 12,
    className: styles.cart,
    children: "0",
  })

  const userPanel = Stack({
    gap: 24,
    children: [search, user, wishlist, cart],
  });
  
  return userPanel;
}