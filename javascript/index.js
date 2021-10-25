
function getTempo() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Recife%2Cbr&lat=0&lon=0&lang=pt&units=metric", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "0781853661msh9a6850b90d5da32p104d9ajsnf3d14e714ca2"
	}
})
.then(response => response.json())
    .then(dados => {
     console.log(dados.coord);
     alert(dados.coord.lon);
    })
    .catch(e => {
      console.log("Erro", e);
    });
}