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

for (let boton of boton_compra){
    boton.addEventListener("click",agregar())
};

function agregar(){
    let producto_id = document.getElementsByTagName("h4").textContent;

if (producto_id == "Césped"){
    Toastify({
        text: item1,
        duration: 3000
    }).showToast();
}
/*else if (producto_id == "Bonsai moyogi"){
    mostrar_carrito(stock[1])
    return
}
else if (producto_id == 'Kit de jardineria "Terra"'){
    mostrar_carrito(stock[2])
    return
}
else if (producto_id == "Maceta mediana negra"){
    mostrar_carrito(stock[3])
    return
}
else if (producto_id == "Castanea sativa"){
    mostrar_carrito(stock[4])
    return
}
else if (producto_id == "Maceta zorro"){
    mostrar_carrito(stock[5])
    return
}*/
};
Toastify({
    text: "hola",
    duration: 3000
}).showToast();