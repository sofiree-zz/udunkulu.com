import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { App_layout } from "./Layout";
import { ArtistHomePage, Finish, LandingPage, Preview, Upload, UploadingPage } from "./Pages";
import { Trending,Mood_Genre,RecentlyAdded,TopArtist } from "./Pages/App/Recommendation";
import { NavBar, Sidebar } from "./Widgets";


const App = () => {
  return <>
    <Router>
        <Switch>
        
        <Route exact path="/">
            <LandingPage/>
          </Route>
          <RouteWrapper path="/trending" component={Trending} layout={App_layout} />
          <RouteWrapper path="/select-mood" component={Mood_Genre} layout={App_layout} />
          <RouteWrapper path="/recently-added" component={RecentlyAdded} layout={App_layout} />
          <RouteWrapper path="/player" component={Trending} layout={App_layout} />
          <RouteWrapper path="/top-artist" component={TopArtist} layout={App_layout} />
          <RouteWrapper path="/search" component={Trending} layout={App_layout} />
          {/* <RouteWrapper path="/search-results-songs" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-artist" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-albums" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-songs" component={Search_page} layout={App_layout} /> */}
          {/* // artist route */}
          <RouteWrapper path="/dashboard" component={ArtistHomePage} layout={App_layout} />
          <RouteWrapper path="/finish" component={Finish} layout={App_layout} />
          <RouteWrapper path="/preview-song-upload" component={Preview} layout={App_layout} />
          <RouteWrapper path="/upload-your-music" component={Upload} layout={App_layout} />
          <RouteWrapper path="/upload" component={UploadingPage} layout={App_layout} />
        </Switch>
      </Router>
  </>;
};

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    }  />
  );
}

export default App;
