document.addEventListener('DOMContentLoaded',()=> {
    if (localStorage.getItem('labels')){
        productos = JSON.parse(localStorage.getItem('labels'))
    }
})
let goods = document.getElementsByClassName (".goods")
let boton_compra = document.querySelectorAll(".comprar");

let stock = [{id:1, nombre: "Césped", precio: 460},
            {id:2, nombre: "Bonsai moyogi", precio: 3150},
            {id:3, nombre: "Kit de jardineria Terra", precio: 1300},
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
    boton.addEventListener("click", e =>
    agregar(e))
};
let productos = {};
function agregar(e){
    if (e.target.classList.contains('comprar')) {
        enviar(e.target.parentElement)
    }
    e.stopPropagation()}
const enviar = objeto => {
    const producto = {
        id: objeto.querySelector('.check').textContent,
        title: objeto.querySelector('h4').textContent,
        precio: objeto.querySelector('.pesos').textContent,
        cantidad: 1,
    };
    localStorage.setItem('labels',JSON.stringify(productos))
    if (productos.hasOwnProperty(producto.id)){
        producto.cantidad = productos[producto.cantidad].cantidad + 1
    }
    productos[producto.id] = {...producto};
    mostrar_carrito();
    function mostrar_carrito(){
        let fila = document.createElement("tr");
        let pesos = producto.cantidad * producto.precio
        fila.innerHTML= `<td>${producto.title}</td>
                        <td>${producto.cantidad}</td>
                        <td>${pesos}</td>
                        <td><button class= "btn-danger eliminar"> X <button/></td>`;
        let display = document.getElementById("tbody");
        display.append(fila);
        
};
let btn_eliminar = document.querySelectorAll(".eliminar");
for (let remover of btn_eliminar){
    remover.addEventListener("click", trash())
}
}
function trash(e){
    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
}
// let btn_eliminar = async function(e){
//     if (e.target.classList.contains('eliminar')){
//         console.log( productos[e.target.producto.id])
//     }
// }
// let btn_eliminar = async function(){
//     let erase = document.querySelectorAll(".eliminar")
//             for (let boton of erase){
//                 boton.addEventListener("click", remover());
//             };}
//     function remover(e){
//         let objetivo = e.target
//         objetivo.remove()};
//         btn_eliminar()

let weather = document.getElementById("clima")
fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&lang=es&units=metric&appid=97aacd4632f75bdacd735949a154fd39")
    .then(response=> response.json())
    .then(data=>{
        let clima = document.createElement("span");
        clima.innerHTML= ` <span>${data.name}: ${data.main.temp}°C</span>`
        weather.append(clima)
    });