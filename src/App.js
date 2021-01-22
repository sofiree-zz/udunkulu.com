import React from 'react';
import { Search } from './Pages';
import { NavBar, Sidebar, MusicController} from './Widgets';

const App =()=> {

  return (
    <div>  
       <Sidebar/>
        

     <NavBar /> 
      {/* <MusicController />  */} 
    </div>
  )
}

export default App;
