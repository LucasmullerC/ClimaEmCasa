const pesquisar  = document.querySelector("#pesqbtn");
const texto = document.querySelector("#pesqtxt");
const caixaInfo = document.getElementById("CaixaI");
const imgT = document.getElementById("imgT");
const nome = document.getElementById("nomecity");
const temperatura = document.getElementById("temperatura");
const termica = document.getElementById("termica");
const humidade = document.getElementById("humidade");
const maxima = document.getElementById("maxima");
const minima = document.getElementById("minima");
const desc= document.getElementById("desc");
const horadata = document.getElementById("horadata");
const btnback = document.getElementById("btnback");
const btnprox = document.getElementById("btnprox");
let cont = -1;
var tempoprev = "";

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

function getPrevisao(dire) {
        if (tempoprev=="") {
        localiz = document.getElementById("pesqtxt").value;
        fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q="+localiz+"&units=metric&lang=pt", {
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
            tempoprev = dados;
           previsao(dire);
        }
        else{
            alert("Ocorreu um erro.")
        }
    })
    .catch(e => {
        console.log("Erro", e); 

    });
}
else{
    previsao(dire);
}
    }
function previsao(dire){
    if (dire == 1) {
        cont--;
        if (cont <= -1) {
            btnback.style.color="gray";
            btnprox.style.color="black";
            pesquisa(tempoatual);
            cont=-1;
        }
        else {
            btnback.style.color="black";
            btnprox.style.color="black";
            pesquisaprev(tempoprev);
        }
    }
    else{
        cont++;
        if (cont >= 39) {
            btnprox.style.color="gray";
            btnback.style.color="black";
            cont = 39;
        }
        else{
            btnprox.style.color="black";
            btnback.style.color="black";
            pesquisaprev(tempoprev);
        }
    }
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
    horadata.innerHTML=getTempo();
    btnback.style.color="gray";
    tempoatual = tempo;
    unfade(caixaInfo,10);
}
function pesquisaprev (tempo){
    imgT.src = "https://openweathermap.org/img/wn/"+tempo.list[cont].weather[0].icon+"@2x.png";
    nome.innerHTML=tempo.city.name;
    temperatura.innerHTML=tempo.list[cont].main.temp+"<span>&#8451;</span>";
    termica.innerHTML="Sensação Térmica: "+tempo.list[cont].main.feels_like+"<span>&#8451;</span>";
    humidade.innerHTML="Humidade: <br>"+tempo.list[cont].main.humidity+"%";
    maxima.innerHTML="Máxima: <br>"+tempo.list[cont].main.temp_max+"<span>&#8451;</span>";
    minima.innerHTML="Mínima: <br>"+tempo.list[cont].main.temp_min+"<span>&#8451;</span>";
    desc.innerHTML=tempo.list[cont].weather[0].description;
    horadata.innerHTML=tempo.list[cont].dt_txt;
}
function getTempo() {
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time+" | "+date;
}
pesquisar.addEventListener('click', getData);