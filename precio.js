
let castaño = { nombre: "Castanea Sativa", precio: 1050}

let funny_pot = { nombre: "Maceta Zorro", precio: 580}

let black_pot = { nombre: "Maceta mediana negra", precio: 680}

let tools = { nombre:"Kit de jardineria Terra", precio: 1300}

let bonsai = { nombre:"Bonsai moyogi", precio: 3150}

let grass = { nombre:"Césped", precio: 460}

function mostrar_precio(){
    if (mostrar_precio = 1){
    console.log(grass.precio)}
    else if (mostrar_precio = 2){
    console.log(bonsai.precio);}
    else if (mostrar_precio = 3){
    console.log( tools.precio);
    }
    else if (mostrar_precio = 4){
    console.log( black_pot.precio);
    }
    else if (mostrar_precio = 5){
    console.log(funny_pot.precio);
    }
    else if (mostrar_precio = 6){
    console.log(castaño.precio);
    }
}



let boton1 = document.getElementById("grass");
boton1.preventDefault();
boton1.addEventListener("onclick" , mostrar_precio(1));{};

let boton2 = document.getElementById("bonsai");
boton2.preventDefault();
boton2.addEventListener("onclick" , mostrar_precio(2));{};

let boton3 = document.getElementById("tools");
boton3.preventDefault();
boton3.addEventListener("onclick" , mostrar_precio(3));{};

let boton4 = document.getElementById("black_pot");
boton4.preventDefault();
boton4.addEventListener("onclick" , mostrar_precio(4));{};

let boton5 = document.getElementById("funny_pot");
boton5.preventDefault();
boton5.addEventListener("onclick" , mostrar_precio(5));{};

let boton6 = document.getElementById("castaño");
boton6.preventDefault();
boton6.addEventListener("onclick" , mostrar_precio(6));{};
