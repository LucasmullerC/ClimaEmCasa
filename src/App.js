import React, { useState } from 'react';
import Header from './components/Header';
import OpenLayersMap from './components/OpenLayersMap';
import VerticalBox from './components/VerticalBox';

function App() {
  const [dados, setDados] = useState('');
  const [mapCenter, setMapCenter] = useState([0, 0]);

  const handleDataReceived = (dados) => {
    setDados(dados); 
    setMapCenter([dados.coord.lon,dados.coord.lat])
  };

  return (
    <>
    <Header onDataReceived={handleDataReceived}/> 
    {dados !== '' && <VerticalBox dados={dados} />}
    {mapCenter  && <OpenLayersMap center={mapCenter}/>}
    </>
  );
}

export default App;
