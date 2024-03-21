//array de productos
const productos = [
    {nombre: "harina", precio: 50 },
    {nombre: "galletas", precio: 100 },
    {nombre: "cerveza", precio: 150 },
    {nombre: "leche", precio: 200 },
    {nombre: "bebida", precio: 250 },
];
//array vacio de carrito
let carrito = []

//metodo entrada y salida
let seleccion = prompt("Hola, deseas comprar?")
//armar bucle que responda al usuario mientras
while(seleccion != "si" && seleccion != "no"){
    alert("porfavor indica si o no")
    seleccion = prompt("hola, deseas comprar algo? si o no")
}

if (seleccion == "si"){
    alert("a continuación nuestros productos")
    let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$");
alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias por venir")
}
//bucle
while(seleccion != "no"){
    let producto = pompt("agrega un producto a tu carrito")
    let precio = 0
    if(producto == "harina " || producto == "galletas" || producto == "cerveza" 
    || producto == "leche" || producto == "bebida"){
        switch(producto){
            case "harina":
            precio = 50
            break;
            case "galletas":
            precio = 100
            break;
            case "cerveza":
            precio = 150
            break;
            case "leche":
            precio = 200
            break;
            case "bebida":
            precio = 250
            break;
            default:
                break;
        }
        let unidades = parseInt(prompt("cuantes unidades quieres?"))
        //meterlo al carrito
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }
    seleccion = prompt("deseas seguir comprando?")
    while(seleccion === "no"){
        alert("gracias")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
    }
    //acc es acumulador
    // el representa cada elemento del arreglo ej el.carrito
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

