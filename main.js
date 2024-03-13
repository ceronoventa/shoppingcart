//fetch significa buscar, n parámetro
//.then pide (variable) resuelve la promesa que se hace
//json transforma el resultado a los datos que necesito
//fetch('https://api.escuelajs.co/api/v1/products')
//.then(res => res.json())
//el resultdo de la promesa se guarda en data(datos)
//.then(data => console.log(datos));

//crear arreglos que contienen los productos
//variables iniciales
//contiene productos disponibles
let shoppingCartArray = [];
//total variable q se actualice
let total = 0;
let productContainer = document.querySelector('.shop-items');

//petición de productos al servidor:
let res = await fetch('https://api.escuelajs.co/api/v1/products')
let data = await res.json()

//limitamos a 4 productos
let productsArray = data.slice(1,5)
console.log(productsArray)

//pintar productos en interfaz for each itera(recorre)cada arreglo
productsArray.forEach(product => {
    // += agrega productos, backtick actualiza variables
    productContainer.innerHTML  += `
     <div class="shop-item">
                    <span class="shop-item-title">T-Shirt</span>
                    <img class="shop-item-image" src="./Images/shirt.jpg">
                    <div class="shop-item-details">
                        <span class="shop-item-price">$19.99</span>
                        <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                    </div>
                </div>`
});