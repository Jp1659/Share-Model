function openPopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.id = "popup-1"; // Makes it visible
  }
}

function closePopup() {
  const popup = document.getElementById("popup-1");
  if (popup) {
    popup.id = "popup"; // Hides it again
  }
}