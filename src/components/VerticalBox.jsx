import React from "react";
import Container from 'react-bootstrap/Container';
import "../css/VerticalBox.css";

  const VerticalComp = ({ dados, onToggleSideBar }) => {

    function getTempo() {
      var today = new Date();
      var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return time+" | "+date;
  }

  function convertTempo(num) {
    var celcius = (num - 32) * 5/9
    return Math.round(celcius)
  }

    return( 
    <div id="CaixaI" class="CaixaInfo">
        <Container id="ContarinerTopVertical">
            <button id="btntopVertical" onClick={onToggleSideBar}>
            <svg width="40" height="40" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
        </Container>
    <br></br>
    <br></br>
    <ol id="olVertical">
        <li>
            <p id="nomecity" class="txttemp">{dados.name}</p>
        </li>
        <li>
            <div class="topT">
                <p id="temperatura" class="txttemp">{convertTempo(dados.main.temp)}<span>&#8451;</span></p>
                <img id="imgT" class="imgT" src={"https://openweathermap.org/img/wn/"+dados.weather[0].icon+"@2x.png"}></img>
            </div>
        </li>
        <li id="desc"></li>
        <br></br>
        <li>
            <div class="middleT">
                <p id="termica">Sensação Térmica: <br></br>{convertTempo(dados.main.feels_like)}<span>&#8451;</span></p>
                <p id="humidade">Humidade: <br></br>{dados.main.humidity+"%"}</p>
            </div>
        </li>
        <li>
            <div class="middleT">
                <p id="maxima">Máxima: <br></br>{convertTempo(dados.main.temp_max)}<span>&#8451;</span></p>
                <p id="minima">Mínima: <br></br>{convertTempo(dados.main.temp_min)}<span>&#8451;</span></p>
            </div>
        </li>
        <li>
            <div class="baixoT">
                <i id="btnback" class="fas fa-backward" onClick="getPrevisao(1)"></i>
                <p id="horadata">{getTempo()}</p>
                <i id="btnprox" class="fas fa-forward" onClick="getPrevisao(2)"></i>
            </div>
        </li>
    </ol>
  </div>);
  }

  export default VerticalComp;