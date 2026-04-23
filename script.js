const btn = document.getElementById("themeToggle");
const html = document.documentElement;

btn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-bs-theme");

  if (currentTheme === "light") {
    html.setAttribute("data-bs-theme", "dark");
  } else {
    html.setAttribute("data-bs-theme", "light");
  }
});

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement; // Pega a tag <html>

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Alterna a classe 'dark' no HTML
        htmlElement.classList.toggle('dark');
        
        // Troca o ícone (Lua/Sol)
        const icon = themeToggle.querySelector('i');
        if (htmlElement.classList.contains('dark')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}