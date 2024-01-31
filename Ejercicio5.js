document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;

  var ulElement = document.createElement("ul");

  const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

  albums.forEach(function (album) {
    var liElement = document.createElement("li");
    liElement.textContent = album;
    ulElement.appendChild(liElement);
  });

  body.appendChild(ulElement);
});
