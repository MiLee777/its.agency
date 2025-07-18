import "./styles/index.scss";
import { Header } from "@/widgets/Header/ui/Header/Header";
import { Hero } from "@/widgets/Hero/ui/Hero/Hero";
import { CategorySection } from "@/widgets/CategorySection/ui/CategorySection/CategorySection";
import { Footer } from "@/widgets/Footer/ui/Footer/Footer";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.appendChild(Header());
  app.appendChild(Hero());
  app.appendChild(CategorySection());
  app.append(Footer());
})
