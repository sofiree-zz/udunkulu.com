import './ArtistHomePage.css';
import {Human1, Human2, MusicNotes} from '../../../Assets/Icons';

const ArtistHomePage =(props)=>{
    return(
        <div>
            <h1 class="header-text-dashboard">
                Welcome, (props.StageName)!
            </h1>
           
            <div class="row pb-5 innerPadding">
                <div class="col-sm-4">
                    <div class="card high card-dashboard" id="Profile"><p>Profile</p> <img src={Human1} alt=""/></div>
                    <div class="card high card-dashboard"><p>Open Heart</p></div>
                </div>
                <div class="col-sm-4">
                    <div class="card low card-dashboard" id="Albums"><p>Albums</p> <img src={MusicNotes} alt=""/></div>
                    <div class="card high card-dashboard"><p>Revenue</p></div>
                </div>
                <div class="col-sm-4">
                    <div class="card high card-dashboard" id="Followers"><p>Followers</p> <img src={Human2} alt=""/></div>
                </div>
            </div>
  

        </div>



    );
}

export {ArtistHomePage};