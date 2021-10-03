function turnDarkOn(dark) {
  console.log("turnDarkOn");
  var r = document.querySelector(":root");
  r.style.setProperty("--background", dark ? "#000" : "#fff");
  r.style.setProperty("--BoxMajor", dark ? "#e6e6e6" : "#444444");
  r.style.setProperty("--BoxMinor", dark ? "#cecece" : "#cecece");
  r.style.setProperty("--FontMajor", dark ? "#e6e6e6" : "#444444");
  r.style.setProperty("--FontMinor", dark ? "#e2e2e2" : "#868686");
  r.style.setProperty("--nav-bg-color", dark ? "#000" : "#fff");
  r.style.setProperty(
    "--searchbar",
    dark ? "rgba(255, 255, 255, 0.445)" : "rgba(143, 209, 192, 0.11)"
  );
  r.style.setProperty("--active", dark ? "#e4e4e4" : "#2d96f8");
  r.style.setProperty(
    "--searchbar-focus",
    dark ? "rgba(197, 197, 197, 0.349)" : "rgba(143, 209, 193, 0.349)"
  );
  r.style.setProperty("--placeholder", dark ? "#e2e2e2" : "#9b9b9b");
  r.style.setProperty("--active-text", dark ? "rgb(0, 0, 0)" : "#fff");
}

export { turnDarkOn };
