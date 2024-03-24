//obtener elemento del html creando una variable
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");

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
    //crear un modal
    
}
)