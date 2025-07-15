export function getStyles(base, mods = {}, additional = []) {
  const modClasses = Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);

  return [base, ...modClasses, ...additional.filter(Boolean)];
}