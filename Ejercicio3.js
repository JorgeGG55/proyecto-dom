document.addEventListener("DOMContentLoaded", function () {
  // 1.1
  const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
  var ulElement = document.createElement("ul");
  countries.forEach(function (country) {
    var liElement = document.createElement("li");
    liElement.textContent = country;
    ulElement.appendChild(liElement);
  });
  document.body.appendChild(ulElement);

  // 1.2
  var elementToRemove = document.querySelector(".fn-remove-me");
  if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
  }

  // 1.3
  const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corolla"];
  var divPrintHere = document.querySelector('[data-function="printHere"]');
  var ulElementCars = document.createElement("ul");
  cars.forEach(function (car) {
    var liElementCar = document.createElement("li");
    liElementCar.textContent = car;
    ulElementCars.appendChild(liElementCar);
  });
  divPrintHere.appendChild(ulElementCars);

  // 1.4
  const countriesData = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];

  countriesData.forEach(function (countryData) {
    var divElement = document.createElement("div");
    var h4Element = document.createElement("h4");
    h4Element.textContent = countryData.title;
    var imgElement = document.createElement("img");
    imgElement.src = countryData.imgUrl;
    divElement.appendChild(h4Element);
    divElement.appendChild(imgElement);
    document.body.appendChild(divElement);
  });

  // 1.5
  var buttonRemoveLast = document.createElement("button");
  buttonRemoveLast.textContent = "Eliminar Último Elemento";
  buttonRemoveLast.addEventListener("click", function () {
    var divElements = document.querySelectorAll("div");
    var lastDivElement = divElements[divElements.length - 1];
    if (lastDivElement) {
      lastDivElement.parentNode.removeChild(lastDivElement);
    }
  });
  document.body.appendChild(buttonRemoveLast);

  // 1.6
  var divElements = document.querySelectorAll("div");
  divElements.forEach(function (divElement) {
    var buttonRemoveCurrent = document.createElement("button");
    buttonRemoveCurrent.textContent = "Eliminar Este Elemento";
    buttonRemoveCurrent.addEventListener("click", function () {
      divElement.parentNode.removeChild(divElement);
    });
    divElement.appendChild(buttonRemoveCurrent);
  });
});
