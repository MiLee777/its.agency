import "./styles/index.scss";
import { Header } from "../widgets/Header/ui/Header/Header";
import { Hero } from "../widgets/Hero/ui/Hero/Hero";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.appendChild(Header());
  app.appendChild(Hero());
})
