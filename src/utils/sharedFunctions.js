import { LocalStorage } from "./storage";

export const updateSiteTheme = (themeName) => {
  let localThemeName = LocalStorage.get("site_theme");
  if(!themeName) {
    themeName = localThemeName;
  } else {
    LocalStorage.set("site_theme", themeName);
  }
  const body = document.body;
  if (themeName === "dark") {
    body.classList.add("dark_mode");
  } else {
    body.classList.remove("dark_mode");
  }
};
