const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Changer le texte du bouton
  if (document.body.classList.contains("dark")) {
    toggleButton.textContent = "☀️ Mode Clair";
  } else {
    toggleButton.textContent = "🌓 Mode Sombre";
  }
});
