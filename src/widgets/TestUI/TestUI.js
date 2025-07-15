import { Typography } from "../../shared/ui/Typography/Typography";


export function TestUi() {
  const container = document.createElement("div");

  const h1 = Typography({
    as: "h1",
    fontStyle: "inter500",
    color: "dark",
    align: "center",
    children: "Заголовок H1"
  });

  const p = Typography({
    as: "p",
    fontStyle: "inter300",
    color: "dark",
    size: 20,
    children: "Это пример параграфа с кастомным размером."
  });

  container.append(h1, p);

  return container;
}