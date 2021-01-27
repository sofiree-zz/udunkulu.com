import './Upload.css';
import {AlbumImage} from '../../../Assets/Images';
import {Button} from '../../../Components';

const Upload =()=>{
    return(
        <form>
            <div class="row p-1 d-flex justify-content-space-evenly">
                <div class="col " id="col1">
                    <div class="form-group" id="albumFormGroup">
                        <label for="albumName">Album Name</label>
                        <input type="text" class="form-control" id="albumName" aria-describedby="albumName" placeholder="Album Name"/> 
                    </div>

                    <div class="form-group" id="albumFormGroup">
                        <label for="featuring">Featuring</label>
                        <input type="text" class="form-control" id="featuring" aria-describedby="featuring" placeholder="Featuring"/> 
                    </div>

                    <div class="form-group" id="albumFormGroup">
                        <label for="genreSelect">Genre</label>
                        <select class="form-control" id="genreSelect">
                        <option>Rock</option>
                        <option>Alte</option>
                        <option>Afro</option>
                        <option>Hip-Hop</option>
                        <option>Jazz</option>
                        </select>
                    </div>

                    <div class="form-group" id="albumFormGroup">
                        <label for="productionYear">Production Year</label>
                        <input type="date" class="form-control" id="productionYear" aria-describedby="productionYear" placeholder="12 Jan 2021"/> 
                    </div>
                </div>
            
            
            
                <div class="col" id="col2">
                    <div class="card" id="albumCard">
                        <div class="card-body">
                            <img id="albumImage" src={AlbumImage} alt=""/>
                            <p>Click to add album art</p>
                        </div>
                    </div>

                    <div class="form-group" id="moodFormGroup">
                        <label for="moodSelect">Mood</label>
                        <select class="form-control" id="moodSelect">
                        <option>Happy</option>
                        <option>Night Cruise</option>
                        <option>Just Cruise</option>
                        <option>Dance</option>
                        <option>Work Out</option>
                        </select>
                    </div>
                </div> 
            </div>
            
            <div class="DropBox">
                <p>Click to add files from your device</p>
                <div id="dropBoxButton">
                <Button variant="browse-file" size={"sm"} >Browse file</Button>
                </div>
                
            </div>
        </form>

    );
}

export {Upload};