import React from 'react';
import Header from './components/Header';
import Statsbar from './components/Statsbar';
import Tabs from './components/Tabs';
import SiteTable from './components/SiteTable';
import Timeline from './components/Timeline';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className='header-main'>
      <Header />
      <Statsbar />
      </div>
    
      <div className="main-content">
        <div className="left">
            <Tabs />
          <SiteTable /></div>
        <div className="right"><Timeline /></div>
      </div>
    </div>
  );
}

export default App;
