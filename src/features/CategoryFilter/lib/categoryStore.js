let selectedCategories = [];
let subscribers = [];

export function getCategory() {
  return selectedCategories;
}

export function setCategory(category) {
  if (!category) return;

  const index = selectedCategories.indexOf(category);
  if (index === -1) {
    selectedCategories.push(category);
  } else {
    selectedCategories.splice(index, 1);
  }
  subscribers.forEach((cb) => cb(selectedCategories));
}

export function subscribe(cb) {
  subscribers.push(cb);
}

export function unsubscribe(cb) {
  subscribers = subscribers.filter((fn) => fn !== cb);
}
