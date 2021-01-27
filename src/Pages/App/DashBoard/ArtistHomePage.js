import './ArtistHomePage.css';

const ArtistHomePage =()=>{
    return(
        <div>
            <h1 class="header-text">
                Welcome, James!
            </h1>
           

          
   
            <div class="row">
                <div class="col-sm-4">
                    <div class="card high">Revenue</div>
                    <div class="card high">Open Heart</div>
                </div>
                <div class="col-sm-4">
                    <div class="card low">Albums</div>
                    <div class="card high">Albums</div>
                </div>
                <div class="col-sm-4">
                    <div class="card high">Followers</div>
                    <div class="card low">Profile</div>
                </div>
            </div>
  

        </div>



    );
}

export {ArtistHomePage};