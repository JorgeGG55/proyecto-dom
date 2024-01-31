// 1.1
var nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

// 1.2
var nuevoDivConP = document.createElement("div");
var nuevoP = document.createElement("p");
nuevoDivConP.appendChild(nuevoP);
document.body.appendChild(nuevoDivConP);

// 1.3
var nuevoDivConP6 = document.createElement("div");
for (var i = 0; i < 6; i++) {
  var nuevoP = document.createElement("p");
  nuevoDivConP6.appendChild(nuevoP);
}
document.body.appendChild(nuevoDivConP6);

// 1.4
var nuevoPdinamico = document.createElement("p");
nuevoPdinamico.textContent = "Soy dinámico!";
document.body.appendChild(nuevoPdinamico);

// 1.5
var h2Element = document.querySelector(".fn-insert-here");
h2Element.textContent = "Wubba Lubba dub dub";

// 1.6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
var ulElement = document.createElement("ul");
apps.forEach(function (app) {
  var liElement = document.createElement("li");
  liElement.textContent = app;
  ulElement.appendChild(liElement);
});
document.body.appendChild(ulElement);

// 1.7
var elementosToRemove = document.querySelectorAll(".fn-remove-me");
elementosToRemove.forEach(function (elemento) {
  elemento.parentNode.removeChild(elemento);
});

// 1.8
var pVoyEnMedio = document.createElement("p");
pVoyEnMedio.textContent = "Voy en medio!";
var divs = document.querySelectorAll("div");
divs[0].parentNode.insertBefore(pVoyEnMedio, divs[1]);

// 1.9
var divsInsertHere = document.querySelectorAll(".fn-insert-here");
divsInsertHere.forEach(function (div) {
  var pVoyDentro = document.createElement("p");
  pVoyDentro.textContent = "Voy dentro!";
  div.appendChild(pVoyDentro);
});
