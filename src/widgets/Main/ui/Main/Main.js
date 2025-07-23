import { Stack } from "@/shared/ui/Stack/Stack";
import { CategorySection } from "../../../CategorySection/ui/CategorySection/CategorySection";
import { Hero } from "../../../Hero/ui/Hero/Hero";

export function Main() {
  const hero = Hero();
  const category = CategorySection();

  const main = Stack({
    tag: "main",
    direction: "column",
    children: [hero, category],
  });

  return main;
}