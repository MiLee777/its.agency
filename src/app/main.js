import "./styles/index.scss";
import { Header } from "@/widgets/Header/ui/Header/Header";
import { Footer } from "@/widgets/Footer/ui/Footer/Footer";
import { Main } from "@/widgets/Main/ui/Main/Main";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.appendChild(Header());
  app.appendChild(Main());
  app.append(Footer());
})
