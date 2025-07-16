import "./styles/index.scss";
import { Header } from "../widgets/Header/ui/Header/Header";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.appendChild(Header());
})
