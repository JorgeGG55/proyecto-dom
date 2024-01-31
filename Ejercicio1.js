// 1.1 Mostrar por consola el botón con la clase .showme:
console.log(document.querySelector(".showme"));

// 1.2 Mostrar por consola el h1 con el id #pillado:
console.log(document.querySelector("#pillado"));

// 1.3 Mostrar por consola todos los elementos p:
console.log(document.querySelectorAll("p"));

// 1.4 Mostrar por consola todos los elementos con la clase .pokemon:
console.log(document.querySelectorAll(".pokemon"));

// 1.5 Mostrar por consola todos los elementos con el atributo data-function="testMe":
console.log(document.querySelectorAll('[data-function="testMe"]'));

// 1.6 Mostrar por consola el tercer elemento con el atributo data-function="testMe":
console.log(document.querySelectorAll('[data-function="testMe"]')[2]);
