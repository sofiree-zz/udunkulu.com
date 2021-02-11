import './Preview.css';
import './Upload.css';
import './UploadingPage.css';
import {NavLink} from 'react-router-dom';
import {AlbumImage} from '../../../Assets/Images';
import {Button} from '../../../Components';

const Preview =()=>{
    return(
        <>
            <div class="row p-1 d-flex justify-content-space-evenly preview-row">
                <div class="col general-details">
                    <h4>Song.Title</h4>
                    <div><text>Artist.Name</text></div>
                    <div><text><strong>Album:</strong> Album.Titile</text></div>
                    <div><text><strong>Released:</strong> Album.Date</text></div>
                    <div class="card" id="songCard">
                        <div class="card-body">
                            <img id="albumImage" src={AlbumImage} alt=""/>
                        </div>
                    </div>
                </div>

                <div class="col song-details">
                    <div id="songName">Song.Name</div>
                </div>
            </div>

            <div id="buttonDiv">
                <NavLink to="/upload" className="nav-link">
                  <Button variant="back" size={"sm"}>Back</Button>
                </NavLink>
                
                <NavLink to="/finish" className="nav-link">
                    <Button variant="next" size={"sm"}>Finish</Button>
                </NavLink>
            </div>
        </>
    );
}

export {Preview};