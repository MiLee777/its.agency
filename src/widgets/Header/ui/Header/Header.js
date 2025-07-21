import { HeaderDesktop } from "../HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";
import { getWidth, subscribeToResize, unsubscribeFromResize } from "@/shared/lib/getResize";
import { Stack } from "@/shared/ui/Stack/Stack";

export function Header() {
  const header = Stack({
    children: [],
  });

  let currentHeader = null;

  function render(width) {
    header.innerHTML = "";

    if (width < 1024) {
      currentHeader = HeaderMobile();
    } else {
      currentHeader = HeaderDesktop();
    }

    header.appendChild(currentHeader);
  }

  render(getWidth());

  const onResize = (width) => {
    render(width);
  };

  subscribeToResize(onResize);

  header.destroy = () => {
    unsubscribeFromResize(onResize);
  };

  return header;
}