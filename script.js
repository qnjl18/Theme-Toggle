
    const button = document.getElementById("toggleThemeBtn");
    const body = document.body;

    button.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");

      if (body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Light Mode";
      } else {
        button.textContent = "Switch to Dark Mode";
      }
    });