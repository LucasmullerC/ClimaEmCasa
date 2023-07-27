import React, { useState } from 'react';
import Header from './components/Header';
import OpenLayersMap from './components/OpenLayersMap';
import VerticalBox from './components/VerticalBox';

function App() {
  const [dados, setDados] = useState('');

  const handleDataReceived = (dados) => {
    setDados(dados); // Armazena o título no estado do componente App
  };

  return (
    <>
    <Header onDataReceived={handleDataReceived}/> 
    {dados !== '' && <VerticalBox dados={dados} />}
    <OpenLayersMap/>
    </>
  );
}

export default App;
