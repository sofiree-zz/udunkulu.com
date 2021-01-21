import React from 'react';
import { NavBar, Sidebar, MusicController} from './Widgets';

const App =()=> {
  return (
    <div>  
     <Sidebar/>
     <NavBar />
     <MusicController />
    </div>
  )
}

export default App;
