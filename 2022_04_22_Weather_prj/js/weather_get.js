navigator.geolocation.getCurrentPosition(
    function(position)
    {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`)
    .then(function(resp) {return resp.json() })
    .then(function (data) {
            console.log(data);
            document.querySelector(".location").textContent = data.name;
            document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + "&deg;C";
            document.querySelector(".weather_desctiption").textContent = data.weather[0].description;

            const iconPath = "https://cdn.freecodecamp.org/weather-icons/";
            const iconObj = {
                [`${iconPath}01d.png`]: "../img/01d.svg",
                [`${iconPath}02d.png`]: "../img/02d.svg",
                [`${iconPath}03d.png`]: "../img/03.svg",
                [`${iconPath}03n.png`]: "../img/03.svg",
                [`${iconPath}04d.png`]: "../img/04.svg",
                [`${iconPath}04n.png`]: "../img/04.svg",
                [`${iconPath}01n.png`]: "../img/01n.svg",
                [`${iconPath}02n.png`]: "../img/02n.svg",
            }
            document.querySelector(".weather_img").innerHTML = `<img src = ".${iconObj[data.weather[0].icon]}" />` 
    })

    .catch(function (){

    });
}
)
