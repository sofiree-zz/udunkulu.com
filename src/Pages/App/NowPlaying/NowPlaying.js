import './NowPlaying.css';
import {MusicController} from '../../../Widgets/MusicController/MusicController';
import {Button} from '../../../Components/Buttons/Buttons';

const NowPlaying =()=>{
    return(
        <div class="container" >
            <section id="playerWrap">
                <header id="header">
                    <h1 id="heading1">Now Playing</h1>
                    <Button variant="signin-player" size={"sm"} data-target={"#authModal"} data-toggle="modal">Sign In</Button>
                </header>

                <div id="songTracks">
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
                <MusicController/>   
            </section>

            <section id="playerImage">
                <div id="playerImageText">
                    <h1 id="heading2">Fem</h1>
                    <h6 id="heading3">Davido</h6>
                    <text><strong>Album:</strong>A Better Time</text>
                    <text><strong>Released:</strong>30 October, 2021</text>

                    <div>
                        <button id="followButton">Follow</button>
                    </div>
                </div>
            </section>
            
               
               
        </div>
        
    );
}

export{NowPlaying};