import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { App_layout } from "./Layout";
import { RecentlyAdded,TopArtist,Trending,Mood_Genre } from "./Pages/App/Recommendation";
import { ArtistHomePage, UploadingPage, Upload } from "./Pages";

const App = () => {
  return (
    <>
      <App_layout>
        <UploadingPage/>
      </App_layout>
    </>
  );
};

export default App;
