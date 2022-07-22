let oscuro = document.querySelectorAll(".oscuro");

for (let darkmode of oscuro){
    darkmode.addEventListener("click",dark)
}


function dark (){
    let principal = document.getElementsByClassName("principal");
    principal.classList.add("darkmode");
    principal.addClass("darkmode");
    principal.className+="darkmode";
    let head = document.getElementsByClassName("head")
    head.classList.add("banner");
    head.addClass("banner");
    head.className+="banner";
    oscuro.innerHTML = '<button class="claro"> <i class="fa-solid fa-sun-bright"></i></button>'
}


let claro = document.querySelectorAll("claro")
for ( let light of claro){
    light.addEventListener("click",regular)
}
function regular (){
    let principal = document.getElementsByClassName("principal");
    principal.classList.remove("darkmode")
    principal.removeClass("darkmode")
    principal.className-="darkmonde"
    let head = document.getElementsByClassName("head")
    head.classList.remove("banner")
    head.removeClass("banner")
    head.className-="banner"
    claro.innerHTML = '<button class="oscuro"> <i class="fa-solid fa-moon"></i></button>';
}
