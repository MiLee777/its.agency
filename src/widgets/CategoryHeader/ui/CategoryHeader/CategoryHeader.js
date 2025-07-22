import { Stack } from "@/shared/ui/Stack/Stack";
import { Typography } from "@/shared/ui/Typography/Typography";

export function CategoryHeader({ width, itemCount, categoryElement, sortElement }) {
  const header = Stack({ justify: "between", children: [] });

  const left = width < 1024
    ? categoryElement
    : Typography({
      fontStyle: "inter600",
      size: 12,
      children: `${itemCount} ТОВАРОВ`,
    });

  header.appendChild(left);
  header.appendChild(sortElement);

  return header;
}