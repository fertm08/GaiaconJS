let boton_compra = document.querySelectorAll(".comprar");

let stock = [{id:1, nombre: "Césped", precio: 460},
{id:2, nombre: "Bonsai moyogi", precio: 3150},
{id:3, nombre: 'Kit de jardineria "Terra"', precio: 1300},
{id:4, nombre: "Maceta mediana negra", precio: 680},
{id:5, nombre: "Castanea sativa", precio: 1050},
{id:6, nombre: "Maceta zorro", precio: 580}];
let clon_stock = stock;
let item1 = clon_stock[0];
let item2 = clon_stock[1];
let item3 = clon_stock[2];
let item4 = clon_stock[3];
let item5 = clon_stock[4];
let item6 = clon_stock[5];
;
for (let boton of boton_compra){
    boton.addEventListener("click",agregar())
};
let productos = [];
function agregar(){
let producto_id = document.getElementsByTagName("h4").textContent;
productos.push(producto_id);
let productos_JSON = JSON.stringify(productos);


localStorage.setItem("productos",productos_JSON);
let seleccionado = localStorage.getItem("productos");
if (seleccionado == "Césped"){
    mostrar_carrito(stock[0]) 
    return
}
else if (seleccionado == "Bonsai moyogi"){
    mostrar_carrito(stock[1])
    return
}
else if (seleccionado == 'Kit de jardineria "Terra"'){
    mostrar_carrito(stock[2])
    return
}
else if (seleccionado == "Maceta mediana negra"){
    mostrar_carrito(stock[3])
    return
}
else if (seleccionado == "Castanea sativa"){
    mostrar_carrito(stock[4])
    return
}
else if (seleccionado == "Maceta zorro"){
    mostrar_carrito(stock[5])
    return
}

};

let boton_carrito = document.getElementById("cart")
for (let changuito of boton_carrito){
    changuito.addEventListener("click",mostrar_carrito())

};
function mostrar_carrito(){
let fila = document.createElement("tr");

    fila.innerHTML= ` <td>${seleccionado}</td>
                    <td>${stock[num][3]}</td>
                    <td><button class= "btn-danger eliminar"> X </td>`;
    let display = document.getElementById("basket");
    display.append(item);
    let erase = documen.querySelectorAll(".eliminar")
    for (let boton of erase){
        boton.addEventListener("click", remover);
    }
};
function remover(e){
    let objetivo = e.target
    objetivo.remove()
}
