document.addEventListener("DOMContentLoaded", function () {
  var printHereDiv = document.querySelector('[data-function="printHere"]');

  var ulElement = document.createElement("ul");

  const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

  places.forEach(function (place) {
    var liElement = document.createElement("li");
    liElement.textContent = place;
    ulElement.appendChild(liElement);
  });

  printHereDiv.appendChild(ulElement);
});
