import './ArtistHomePage.css';

const ArtistHomePage =(props)=>{
    return(
        <div>
            <h1 class="header-text-dashboard">
                Welcome, (props.StageName)!
            </h1>
           
            <div class="row pb-5 innerPadding">
                <div class="col-sm-4">
                    <div class="card high card-dashboard">Revenue</div>
                    <div class="card high card-dashboard">Open Heart</div>
                </div>
                <div class="col-sm-4">
                    <div class="card low card-dashboard">Albums</div>
                    <div class="card high card-dashboard">Albums</div>
                </div>
                <div class="col-sm-4">
                    <div class="card high card-dashboard">Followers</div>
                    <div class="card low card-dashboard">Profile</div>
                </div>
            </div>
  

        </div>



    );
}

export {ArtistHomePage};