import React, { useState } from 'react';
import Header from './components/Header';
import OpenLayersMap from './components/OpenLayersMap';
import VerticalBox from './components/VerticalBox';

function App() {
  const [dados, setDados] = useState('');
  const [mapCenter, setMapCenter] = useState([-34.871292, -8.063118]);
  const [showSideBar, setShowSideBar] = useState(true);

  const handleToggleSideBar = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const handleDataReceived = (dados) => {
    setDados(dados); 
    setMapCenter([dados.coord.lon,dados.coord.lat])
  };

  return (
    <>
    <Header onDataReceived={handleDataReceived}/> 
    {dados !== '' && showSideBar && <VerticalBox dados={dados} onToggleSideBar={handleToggleSideBar} />}
    {mapCenter  && <OpenLayersMap center={mapCenter}/>}
    </>
  );
}

export default App;
