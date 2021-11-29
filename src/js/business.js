const closePopupComingSoon = document.getElementById("close-popup-coming-soon");

closePopupComingSoon.addEventListener("click", () => {
  window.history.go(-1);
});
