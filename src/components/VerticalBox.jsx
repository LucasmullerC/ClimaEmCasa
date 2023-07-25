import React from "react";
import "../css/VerticalBox.css";

class VerticalBox extends React.Component {
    render() {
      return <VerticalComp />;
    }
  }



  const VerticalComp = () => {
    return( 
    <div id="CaixaI" class="CaixaInfo">
    <br></br>
    <br></br>
    <ol id="olVertical">
        <li>
            <p id="nomecity" class="txttemp"></p>
        </li>
        <li>
            <div class="topT">
                <p id="temperatura" class="txttemp"></p>
                <img id="imgT" class="imgT" src=""></img>
            </div>
        </li>
        <li id="desc"></li>
        <br></br>
        <li>
            <div class="middleT">
                <p id="termica"></p>
                <p id="humidade"></p>
            </div>
        </li>
        <li>
            <div class="middleT">
                <p id="maxima"></p>
                <p id="minima"></p>
            </div>
        </li>
        <li>
            <div class="baixoT">
                <i id="btnback" class="fas fa-backward" onClick="getPrevisao(1)"></i>
                <p id="horadata"></p>
                <i id="btnprox" class="fas fa-forward" onClick="getPrevisao(2)"></i>
            </div>
        </li>
    </ol>
  </div>);
  }

  export default () => (
    <React.Fragment>
      <VerticalBox />
    </React.Fragment>
  );