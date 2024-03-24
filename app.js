//obtener elemento del html creando una variable
const shopContent = document.getElementById("shopContent");

//array de porductos- objetos
const productos = [
    {
        id: 1,
        nombre: "harina",
        precio: 50,
        img:
        "https://i.pinimg.com/474x/15/a8/9e/15a89e520c375b9ef995d4e5a4fc4052.jpg",
    },
    {
        id: 2,
        nombre: "galletas",
         precio: 100,
        img: "https://i.pinimg.com/474x/c9/74/77/c974779e0c81aca3a7998728b0072446.jpg",
    },
    {
        id: 3,
        nombre: "jugo",
        precio: 150,
        img: "https://i.pinimg.com/564x/4a/e4/3f/4ae43f1cea5b43e723103242135fc43b.jpg",
    },
    {
        id: 4,
        nombre: "leche",
        precio: 200,
        img: "https://i.pinimg.com/564x/cd/e3/85/cde385fa76d57a525dd764b20f615285.jpg",
    },
    {
        id: 5,
        nombre: "bebida",
        precio: 250,
        img: "https://i.pinimg.com/564x/26/e9/76/26e9766e8a74a840954affbf07519f1c.jpg",
    },
];
//array vacio de carrito
let carrito = [];

productos.forEach((product)=> {
    /*document hace alucion a toda la interfaz*/
    let content = document.createElement("div");
/*crear contenido html dentro inner crea etiquetas agrega al div */
content.innerHTML =  `
<img src="${product.img}">
<h3>${product.nombre}</h3>
<p>${product.precio} $</p>
`;

//Unir el div padre que esta en la variable shopContent
shopContent.append(content);
})
