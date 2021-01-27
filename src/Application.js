import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { App_layout } from "./Layout";
import { ArtistHomePage, Upload } from "./Pages";

const App = () => {
  return (
    <>
    <App_layout>
      <Upload/>
    </App_layout>
    </>
  );
};

export default App;
