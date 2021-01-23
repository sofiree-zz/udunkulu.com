import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import React from 'react';
import { Authentication, Search } from './Pages';
import { NavBar, Sidebar, MusicController} from './Widgets';

const App =()=> {

  return (
    <div>  
      <Router>
      <Switch>
      <Route path="/Authentication" component={Authentication} exact />
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
