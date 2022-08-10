let weather = document.getElementById("clima")
fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&lang=es&units=metric&appid=97aacd4632f75bdacd735949a154fd39")
    .then(response=> response.json())
    .then(data=>{
        let clima = document.createElement("span");
        clima.innerHTML= ` <span>${data.name}: ${data.main.temp}°C</span>`
        weather.append(clima)
    });

    
