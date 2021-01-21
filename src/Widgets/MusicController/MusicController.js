import React from 'react';
import { MusicAvatar} from '../../Assets/Images';
import './MusicController.css';


const MusicController = () => {
    return(
        <div class="container-fluid">
            <div class="progress" id="player">
                <div class="progress-bar"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  id="player-bar"></div>
                <div class="circle"></div>
            </div>
  
            <div class="controller">

                <div class="volume">
                    <div><button class="btn"><i class="fas fa-volume-up"></i></button></div>
                    <div class="progress" id="volume">
                        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"  id="volume-bar"></div>
                        <div class="circle"></div>
                    </div>
                </div>
     
                <div class="player-buttons">
                    <button class="btn  " ><i class="fas fa-backward"></i></button>
                    <button  class="btn   "><i class="fas fa-play"></i></button>
                    <button  class="btn  "><i class="fas fa-forward"></i></button>
                </div>

                <div class="music-article">
                    <div class="music-img"><img src={MusicAvatar} alt=""/></div>
                    <div class="music detail"><text>Fem</text><br/><text>Davido</text></div>
                </div> 
            </div> 
        </div>
    );
}

export{MusicController};