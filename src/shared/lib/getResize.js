let width = window.innerWidth;
let subscribers = [];

function handleResize(e) {
  width = e.target.innerWidth;
  subscribers.forEach((cb) => cb(width));
}

window.addEventListener("resize", handleResize);

export function getWidth() {
  return width;
}

export function subscribeToResize(cb) {
  subscribers.push(cb);
  cb(width);
}

export function unsubscribeFromResize(cb) {
  subscribers = subscribers.filter((fn) => fn !== cb);
}

export function cleanupResizeListener() {
  window.removeEventListener("resize", handleResize);
  subscribers = [];
}

