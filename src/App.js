import './App.css';
import React, {useEffect, useState } from "react";
import { Widget } from '@maticnetwork/wallet-widget';

const widget = new Widget({
  target: '#btnOpenWidget',
  appName: "test1_1",
  position: "center",
  network: "mainnet",
});

const App = () => {

  // subscribe to event onLoad
  const load = () => {
    console.log('widget is loaded');
  };

  const close = () => {
    console.log('widget is closed');
  };

  useEffect(() => {
    widget.on('load', load);
    widget.on('close', close);
    widget.create();
  }, [])

  return (
    <React.Fragment>
      <h1>CEL Token Polygon Bridge</h1>
      <br></br>
      <p1>Transactions may take up to 3+ hours to complete.</p1>
      <br></br>
      <p1>Please use at your own risk!</p1>
      <br></br>
      <button id="btnOpenWidget">Connect to Bridge</button>
    </React.Fragment>
  )
};

export default App