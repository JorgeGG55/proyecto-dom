document.addEventListener("DOMContentLoaded", function () {
  // 1.1
  var btnToClick = document.createElement("button");
  btnToClick.id = "btnToClick";
  btnToClick.textContent = "Click Me!";
  document.body.appendChild(btnToClick);

  btnToClick.addEventListener("click", function (event) {
    console.log("Click event:", event);
  });

  // 1.2
  var inputFocus = document.querySelector(".focus");
  inputFocus.addEventListener("focus", function () {
    console.log("Focus event - Input value:", inputFocus.value);
  });

  // 1.3
  var inputValue = document.querySelector(".value");
  inputValue.addEventListener("input", function () {
    console.log("Input event - Input value:", inputValue.value);
  });
});
