import { SearchIcon } from "@/shared/assets/icons/SearchIcon";
import { UserIcon } from "@/shared/assets/icons/UserIcons";
import { WishlistIcon } from "@/shared/assets/icons/WishlistIcon";
import { Stack } from "@/shared/ui/Stack/Stack";
import { CartButton } from "@/entities/Cart/ui/CartButton/CartButton";

export function UserPanel() {
  const search = SearchIcon();
  const user = UserIcon();
  const wishlist = WishlistIcon();
  const cart = CartButton();

  const userPanel = Stack({
    gap: 24,
    children: [search, user, wishlist, cart],
  });
  
  return userPanel;
}