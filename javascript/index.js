const pesquisar  = document.querySelector("#pesqbtn");
const caixaInfo = document.getElementById("CaixaI");
const imgT = document.getElementById("imgT");
const nome = document.getElementById("nomecity");
const temperatura = document.getElementById("temperatura");
const termica = document.getElementById("termica");
const humidade = document.getElementById("humidade");
const maxima = document.getElementById("maxima");
const minima = document.getElementById("minima");
const desc= document.getElementById("desc");

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
    Mapa(tempo.coord.lon,tempo.coord.lat);
    imgT.src = "https://openweathermap.org/img/wn/"+tempo.weather[0].icon+"@2x.png"
    nome.innerHTML=tempo.name;
    temperatura.innerHTML=tempo.main.temp+"<span>&#8451;</span>";
    termica.innerHTML="Sensação Térmica: "+tempo.main.feels_like+"<span>&#8451;</span>";
    humidade.innerHTML="Humidade: <br>"+tempo.main.humidity+"%";
    maxima.innerHTML="Máxima: <br>"+tempo.main.temp_max+"<span>&#8451;</span>";
    minima.innerHTML="Mínima: <br>"+tempo.main.temp_min+"<span>&#8451;</span>";
    desc.innerHTML=tempo.weather[0].description;
    unfade(caixaInfo,10);
}

pesquisar.addEventListener('click', getData);