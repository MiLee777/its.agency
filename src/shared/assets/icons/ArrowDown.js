export function ArrowDown() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "8");
  svg.setAttribute("height", "5");
  svg.setAttribute("viewBox", "0 0 8 5");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M4 4.5L7.4641 0L0.535898 0L4 4.5Z");
  path.setAttribute("fill", "#202020");

  svg.appendChild(path);
  return svg;
}