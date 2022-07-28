let SwitchButton = document.getElementById("switch")
SwitchButton.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
    SwitchButton.classList.toggle("active")
})
