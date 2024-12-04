document.addEventListener("DOMContentLoaded", () => {
    const openPopupButton = document.getElementById("openPopup");
    const closePopupButton = document.getElementById("closePopup");
    const popupMenu = document.getElementById("popupMenu");
  
    // Abre o popup
    openPopupButton.addEventListener("click", () => {
      popupMenu.style.display = "block";
    });
  
    // Fecha o popup
    closePopupButton.addEventListener("click", () => {
      popupMenu.style.display = "none";
    });
  
    // Fecha o popup ao clicar fora (opcional)
    window.addEventListener("click", (event) => {
      if (event.target.id !== "popupMenu" && !popupMenu.contains(event.target) && event.target.id !== "openPopup") {
        popupMenu.style.display = "none";
      }
    });
  });
  