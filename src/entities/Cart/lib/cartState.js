let cartItems = [];
let subscribers = [];

export function addToCart(product) {
  const existing = cartItems.find((item) => item._id === product._id);
  if (existing) {
    existing.count++;
  } else {
    cartItems.push({ ...product, count: 1 });
  }
  notify();
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item._id !== productId);
  notify();
}

export function clearCart() {
  cartItems = [];
  notify();
}

export function getCart() {
  return cartItems;
}

export function subscribe(cb) {
  subscribers.push(cb);
}

export function unsubscribe(cb) {
  subscribers = subscribers.filter(fn => fn !== cb);
}

export function increaseQuantity(productId) {
  const item = cartItems.find((i) => i._id === productId);
  if (item) {
    item.count += 1;
    notify();
  }
}

export function decreaseQuantity(productId) {
  const item = cartItems.find((i) => i._id === productId);
  if (item) {
    item.count -= 1;
    if (item.count <= 0) {
      removeFromCart(productId);
    } else {
      notify();
    }
  }
}

function notify() {
  subscribers.forEach((cb) => cb(cartItems));
}
