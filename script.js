function enableCSS() {
  css = document.createElement("link");
  css.rel = "stylesheet";
  css.type = "text/css";
  css.href = "style.css";
  document.head.appendChild(css);
}
