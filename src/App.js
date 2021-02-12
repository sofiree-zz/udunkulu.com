import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { App_layout, ArtistLayout } from "./Layout";
import {
  ArtistHomePage,
  Finish,
  LandingPage,
  NowPlaying,
  Preview,
  Search_page,
  Upload,
  UploadingPage,
  UploadForm
} from "./Pages";
import {
  Trending,
  Mood_Genre,
  RecentlyAdded,
  TopArtist,
} from "./Pages/App/Recommendation";
import { SearchResult } from "./Pages/App/Search/SearchResult";
import { ArtistNavBar, NavBar, Sidebar, ProgressBar } from "./Widgets";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />

            {/* <ProgressBar/> */}
          </Route>
          <RouteWrapper
            path="/trending"
            component={Trending}
            layout={App_layout}
          />
          <RouteWrapper
            path="/select-mood"
            component={Mood_Genre}
            layout={App_layout}
          />
          <RouteWrapper
            path="/recently-added"
            component={RecentlyAdded}
            layout={App_layout}
          />
          <RouteWrapper
            path="/player"
            component={Trending}
            layout={App_layout}
          />
          <RouteWrapper
            path="/top-artist"
            component={TopArtist}
            layout={App_layout}
          />
          <RouteWrapper
            path="/search"
            component={Search_page}
            layout={App_layout}
          />
          <RouteWrapper
            path="/results"
            component={SearchResult}
            layout={App_layout}
          />
          {/* 
          <RouteWrapper path="/search-results-artist" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-albums" component={Search_page} layout={App_layout} />
          <RouteWrapper path="/search-results-songs" component={Search_page} layout={App_layout} /> */}
          {/* // artist route */}
          <RouteWrapper
            path="/dashboard"
            component={ArtistHomePage}
            layout={ArtistLayout}
            protectedRoute={true}
          />
          <RouteWrapper
            path="/finish"
            component={Finish}
            layout={ArtistLayout}
          />
          <RouteWrapper
            path="/preview-song-upload"
            component={Preview}
            layout={ArtistLayout}
          />
          <RouteWrapper
            path="/upload-your-music"
            component={UploadForm}
            layout={ArtistLayout}
          />
          <RouteWrapper
            path="/upload"
            component={UploadingPage}
            layout={ArtistLayout}
          />
           <RouteWrapper 
           path="/multi" 
           component={UploadForm} 
           layout={ArtistLayout}
            />
        </Switch>
      </Router>
    </>
  );
};

function RouteWrapper({
  protectedRoute = false,
  component: Component,
  layout: Layout,
  ...rest
}) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (protectedRoute) {
      if (!token || token === "undefined") {
        window.location = "/";
        return;
      } else setShow(true);
    }
  }, [Component, protectedRoute]);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;
