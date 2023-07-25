import React, { useState } from 'react';
import Header from './components/Header';
import OpenLayersMap from './components/OpenLayersMap';
import VerticalBox from './components/VerticalBox';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleToggleSideBar = () => {
    setShowSideBar((prevState) => !prevState);
  };

  return (
    <>
    <Header onToggleSideBar={handleToggleSideBar} headerClass={showSideBar ? 'header-sidebar-open' : ''}/> 
    {showSideBar && <VerticalBox/>}
    <OpenLayersMap/>
    </>
  );
}

export default App;
