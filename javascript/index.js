const pesquisar  = document.querySelector("#pesqbtn");
const caixaInfo = document.getElementById("CaixaI");

async function getData() {
    localiz = document.getElementById("pesqtxt").value;
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+localiz+"&lang=pt&units=metric", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "0781853661msh9a6850b90d5da32p104d9ajsnf3d14e714ca2"
        }
    })
.then(response => response.json())
    .then(dados => {
        if (dados.cod == 401 || dados.cod == 429) {
            alert("A API está indisponivel no momento!");
        }
        else if(dados.cod == 404) {
            alert("Cidade não encontrada.")
        }
        else if(dados.cod == 200) {
           pesquisa(dados);
        }
        else{
            alert("Ocorreu um erro.")
        }
    })
    .catch(e => {
        console.log("Erro", e); 

    });
    }

function pesquisa(tempo) {
    Mapa(tempo.coord.lat,tempo.coord.lon);
    unfade(caixaInfo,10);
}

pesquisar.addEventListener('click', getData);