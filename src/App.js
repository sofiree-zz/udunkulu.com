import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { App_layout, ArtistLayout } from "./Layout";
import { ArtistHomePage, Finish, LandingPage, Preview, Search_page, Upload, UploadingPage } from "./Pages";
import { Trending,Mood_Genre,RecentlyAdded,TopArtist } from "./Pages/App/Recommendation";
import { ArtistNavBar, NavBar, Sidebar, ProgressBar } from "./Widgets";


const App = () => {
  return <>
    <Router>
        <Switch>
        
        <Route exact path="/">
            <LandingPage/>
            {/* <ArtistNavBar/> */}
            {/* <ProgressBar/> */}
          </Route>
          <RouteWrapper path="/trending" component={Trending} layout={App_layout} />
          <RouteWrapper path="/select-mood" component={Mood_Genre} layout={App_layout} />
          <RouteWrapper path="/recently-added" component={RecentlyAdded} layout={App_layout} />
          <RouteWrapper path="/player" component={Trending} layout={App_layout} />
          <RouteWrapper path="/top-artist" component={TopArtist} layout={App_layout} />
          <RouteWrapper path="/search" component={Search_page} layout={App_layout} />
          {/* <RouteWrapper path="/search-results-songs" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-artist" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-albums" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-songs" component={Search_page} layout={App_layout} /> */}
          {/* // artist route */}
          <RouteWrapper path="/dashboard" component={ArtistHomePage} layout={ArtistLayout} />
          <RouteWrapper path="/finish" component={Finish} layout={ArtistLayout} />
          <RouteWrapper path="/preview-song-upload" component={Preview} layout={ArtistLayout} />
          <RouteWrapper path="/upload-your-music" component={Upload} layout={ArtistLayout} />
          <RouteWrapper path="/upload" component={UploadingPage} layout={ArtistLayout} />
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
