import { Stack } from "@/shared/ui/Stack/Stack";
import { navData } from "../../lib/data";
import { Link } from "../../../../shared/ui/Link/Link";

export function Navbar() {
  const links = navData.map(({text, href}) =>
    Link({ text, href })
  );

  const nav = Stack({
    tag: "nav",
    gap: 24,
    children: links,
  });

  return nav;
}