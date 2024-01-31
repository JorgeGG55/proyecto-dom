document.addEventListener("DOMContentLoaded", function () {
  var elementToRemove = document.querySelector(".fn-remove-me");

  if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
    console.log("Elemento eliminado");
  }
});
