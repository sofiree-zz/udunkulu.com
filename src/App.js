import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import React from 'react';
import { ArtistLogin, Authentication, Search } from './Pages';
import { NavBar, Sidebar, MusicController} from './Widgets';

const App =()=> {

  return (
    <div>  
      <Router>
      <Switch>
      <Route path="/Authentication" component={Authentication} exact />
      {/* <Route path="/ArtistLogin" component={ArtistLogin} exact /> */}
      </Switch>

      <Sidebar/>
      <NavBar />
      </Router>

     

      {/* <Authentication/>  */}
      {/* <MusicController />  */} 
    </div>
  )
}

export default App;
