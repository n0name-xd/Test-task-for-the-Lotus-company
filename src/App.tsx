import React from 'react';
import './App.css';
import { BiddingProgress } from './components/BiddingProgress/BiddingProgress';
import dataLotOne from "./dataBidding/dataBidding";

const App: React.FC = () => {
  return (
    <div className="App">
      <BiddingProgress lotInformation={dataLotOne}/>
    </div>
  );
};

export default App;
