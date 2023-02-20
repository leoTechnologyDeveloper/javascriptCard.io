
// selecciones en DOM ------------------
const body = document.querySelector('body');


// styling body
body.style.width = "100vw";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundColor = "white";
body.style.fontFamily = "sans-serif";

// creando main ---------
let main = document.createElement("main");
main.style.width = "320px";
main.style.height = "450px";
main.style.backgroundColor = "#DC3F0B";
main.style.textAlign = "center";
main.style.borderRadius = "25px";
main.style.position = "relative";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.justifyContent = "space-evenly";
main.style.alignItems = "center";
main.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
main.style.color = "whitesmoke";

//creando imageContainer
let imageContainer = document.createElement('div');
imageContainer.style.display = "flex";
imageContainer.style.justifyContent = "center";

// Creando imagen -----------
let imagen1 = document.createElement('img');
imagen1.src = "https://images.pexels.com/photos/1906818/pexels-photo-1906818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
imagen1.style.width = "40%";
imagen1.style.borderRadius = "15px";
imagen1.style.borderRadius = "50%";
imagen1.style.position = "absolute";
imagen1.style.top = "-15%";
imagen1.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";

//creando textContainer
let textContainer = document.createElement('div');
textContainer.style.display = "flex";
textContainer.style.flexDirection = "column";
textContainer.style.alignItems = "center";
textContainer.style.width = "85%";
textContainer.style.marginTop = "30px";

//creando priceContainer
let priceContainer = document.createElement('div');
priceContainer.style.display = "flex";
priceContainer.style.width = "85%";
priceContainer.style.justifyContent = "space-between";
priceContainer.style.fontWeight = "bold";

// creando Título
let h2 = document.createElement('h2');
h2.innerText = "Warm Sweater";
h2.style.fontSize = "2rem"

// creando Texto
let text = document.createElement('p');
text.innerText = "Enjoy our last and warm creation in this winter, with the best and family design";

// creando tallaTexto
let tallaText = document.createElement('p');
tallaText.innerText = "S M L XL";

// creando priceTexto
let priceText = document.createElement('p');
priceText.innerText = "$ 152,500";

// creando botón
let button = document.createElement('button');
button.innerText = "ADD TO CART";
button.style.backgroundColor = "yellow";
button.style.border = "none";
button.style.padding = "8px 18px";
button.style.borderRadius = "15px";
button.style.marginTop = "2rem";
button.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
button.style.fontWeight = "bold";
button.style.cursor = "pointer";


// añadiendo elementos al DOM
body.appendChild(main);
main.appendChild(imageContainer);
main.appendChild(textContainer);
imageContainer.appendChild(imagen1);
textContainer.appendChild(h2);
textContainer.appendChild(text);
textContainer.appendChild(priceContainer);
priceContainer.appendChild(tallaText);
priceContainer.appendChild(priceText);
textContainer.appendChild(button);