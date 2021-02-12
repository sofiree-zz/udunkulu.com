import './NowPlaying.css';
import {MusicController} from '../../../Widgets/MusicController/MusicController';
import {Button} from '../../../Components/Buttons/Buttons';

const NowPlaying =()=>{
    return(
        <div id="playerWrap">    
                <h1 id="heading1">Now Playing</h1>  
                <div class="playLibrary"> 
                    <div  id="songTracks">      
                        <ol id="playerList">
                            <li id="listItems">
                                <span class="playerTitle">Track Title</span>
                                <span class="playerLength">Track Duration</span>
                            </li>

                            <li id="listItems">
                                <span class="playerTitle">Track Title</span>
                                <span class="playerLength">Track Duration</span>
                            </li>

                            <li id="listItems">
                                <span class="playerTitle">Track Title</span>
                                <span class="playerLength">Track Duration</span>
                            </li>

                            <li id="listItems">
                                <span class="playerTitle">Track Title</span>
                                <span class="playerLength">Track Duration</span>
                            </li>
                        </ol>
                    </div>

                     <div class=" card" id="playerImage">
                        <div id="playerImageText">
                            <h1 id="heading2">Fem</h1>
                            <h6 id="heading3">Davido</h6>
                            <text><strong>Album:</strong>A Better Time</text>
                            <text><strong>Released:</strong>30 October, 2021</text>

                            <div id="playerImageButton">
                                <button id="followButton">Follow</button>
                                <button id="playButton"><i class="fas fa-play"></i></button>
                            </div>
                        </div>
                    </div>

                </div>

                
                   
            
            {/* <MusicController/> */}
            
            
               
               
        </div>
        
    );
}

export{NowPlaying};