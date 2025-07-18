export function Image({ src, alt, className = "", ...attrs }) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.className = className;

  for (const [key, value] of Object.entries(attrs)) {
    img.setAttribute(key, value);
  }

  return img;
}
