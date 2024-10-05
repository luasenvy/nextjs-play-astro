export default function getTheme() {
  const userTheme = localStorage?.theme;

  if (["light", "dark"].includes(userTheme)) return userTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
