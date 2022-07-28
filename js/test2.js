let boton_compra = document.querySelectorAll(".comprar")

let inventario1 = {
    nombre: "Césped",
    precio: 460
}
let inventario2 = {
    nombre: "Bonsai moyogi",
    precio: 3150
}
let inventario3 = {
    nombre: "Kit de jardineria 'Terra'",
    precio: 1300
}
let inventario4 = {
    nombre: "Maceta mediana negra",
    precio: 680
}
let inventario5 = {
    nombre: "Castanea sativa",
    precio: 1050
}
let inventario6 = {
    nombre:"Maceta zorro",
    precio: 580
}
;

for (let boton of boton_compra){
    boton.addEventListener("click",añadir)
};
let productos = [];
function añadir(e){
let producto_id = document.querySelector("h4").textContent;
//console.log(producto_id); Solo me identifica el primer h4 Césped
productos.push(producto_id);
let productos_JSON = JSON.stringify(productos);


localStorage.setItem("productos",productos_JSON);
let seleccionado = localStorage.getItem("productos");
if (seleccionado == inventario1.nombre){
    mostrar_carrito(inventario1.precio)
    return
}
else if (seleccionado == inventario2.nombre){
    mostrar_carrito(inventario2.precio)
    return
}
else if (seleccionado == inventario3.nombre){
    mostrar_carrito(inventario3.precio)
    return
}
else if (seleccionado == inventario4.nombre){
    mostrar_carrito(inventario4.precio)
    return
}
else if (seleccionado == inventario5.nombre){
    mostrar_carrito(inventario5.precio)
    return
}
else if (seleccionado == inventario6.nombre){
    mostrar_carrito(inventario6.precio)
    return
}

};

let boton_carrito = document.getElementsByClassName("cart")
for (let changuito of boton_carrito){
    changuito.addEventListener("click",mostrar_carrito)
};
function mostrar_carrito(){
let fila = document.createElement("tr");

    fila.innerHTML= '<td>${seleccionado}</td>'
                    '<td>${num}</td>'
                    '<td><button class= "btn-danger eliminar"> X </td>';
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