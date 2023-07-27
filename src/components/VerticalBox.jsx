import React from "react";
import "../css/VerticalBox.css";

  const VerticalComp = ({ dados }) => {
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