//obtener elemento del html creando una variable
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

//array vacio de carrito
let carrito = [];

productos.forEach((product)=> {
    /*document hace alucion a toda la interfaz*/
    let content = document.createElement("div");
    content.className = "card";
    /*crear contenido html dentro inner crea etiquetas agrega al div */
content.innerHTML =  `
<img src="${product.img}">
<h3>${product.nombre}</h3>
<p class="price">${product.precio} $</p>
`;

//Unir el div padre que esta en la variable shopContent
shopContent.append(content);
//crear boton de shop
let comprar = document.createElement("button");
comprar.innerText = "comprar";
comprar.className = "comprar";
content.append(comprar);

comprar.addEventListener("click", () =>
carrito.push({
    id: product.id,
    img: product.img,
    nombre: product.nombre,
    precio: product.precio,
})

);
});

verCarrito.addEventListener("click", () => {
    //crear un modal donde van las compras agregadas
    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);
//crear boton para el modal
const modalButton = document.createElement("h1");
modalButton.innerText = "x";
modalButton.className = "modal-header-button";

modalHeader.append(modalButton);

carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src= "${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    `;

    modalContainer.append(carritoContent);
});
//calcular total con metodo reduce - el representa cada uno de los productos
//acc es acumulador, esta vacio, se le suma el precio
const total = carrito.reduce((acc, el) => acc + el.precio, 0);

const totalBuying = document.createElement("div");
totalBuying.className = "total-content";
totalBuying.innerHTML = `total a pagar: ${total} $`;
modalContainer.append(totalBuying);
});
