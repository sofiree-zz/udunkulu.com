import {useState} from 'react';
import './Upload.css';
import './UploadingPage.css';
import {NavLink} from 'react-router-dom';
import {AlbumImage} from '../../../Assets/Images';
import {Button} from '../../../Components';

const Upload =(props)=>{

    const [album, setAlbum] = useState( );

  const handleChange = e => {
      console.log('file has uploaded', e.target.files);
    // if (e.target.files.length) {
    //   setAlbum(e.target.files[0]);
    // }
  };

  const handleUpload = async e => {

  }
  const formInfo = props.formInfo
    return(
        <>
        
        <form class="form" id="formPadding">
            <div class="row p-1 d-flex justify-content-space-evenly">
                <div class="col " id="col1">
                    <div class="form-group form-group-upload" id="albumFormGroup">
                        <label for="albumName" class="label-upload">Album Name</label>
                        <input type="text" class="form-control form-control-upload" id="albumName" aria-describedby="albumName" placeholder="Album Name" onChange={props.handleFieldOnChange} name="title" defaultValue={formInfo.title}/> 
                    </div>

                    <div class="form-group" id="albumFormGroup">
                        <label for="featuring" className="label-upload">Featuring</label>
                        <input type="text" class="form-control form-control-upload" id="featuring" aria-describedby="featuring" placeholder="Featuring" onChange={props.handleFieldOnChange} name="feature" defaultValue={formInfo.feature}/> 
                    </div>

                    <div class="form-group" id="albumFormGroup">
                        <label for="genreSelect" class="label-upload">Genre</label>
                        <select class="form-control form-control-upload" id="genreSelect" onChange={props.handleFieldOnChange} name="genre"  defaultValue={formInfo.genre}>
                        <option>Rock</option>
                        <option>Alte</option>
                        <option>Afro</option>
                        <option>Hip-Hop</option>
                        <option>Jazz</option>
                        </select>
                    </div>

                    <div class="form-group form-control-upload" id="albumFormGroup">
                        <label for="productionYear" className="label-upload">Production Year</label>
                        <input type="date" class="form-control form-control-upload" id="productionYear" aria-describedby="productionYear" placeholder="12 Jan 2021" onChange={props.handleFieldOnChange} name="release" defaultValue={formInfo.release}/> 
                    </div>
                </div>
            
            
            
                <div class="col" id="col2">
                    <div class="card" id="albumCard">
                        <div class="card-body">
                        <label for="image">
                         <input type="file" name="image" id="
                         " style={{display: 'none'}} onChange={props.handleAlbumCoverSelect} defaultValue={formInfo.albumCover} accept="image/*"/>
                          <img id="albumImage" src={AlbumImage} alt="" />
                     </label>
                            <p>Click to add album art</p>
                        </div>
                    </div>

                    <div class="form-group" id="moodFormGroup">
                        <label for="moodSelect" className="label-upload">Mood</label>
                        <select class="form-control form-control-upload" id="moodSelect" onChange={props.handleFieldOnChange} name="mood" defaultValue={formInfo.mood} >
                        <option>Happy</option>
                        <option>Night Cruise</option>
                        <option>Just Cruise</option>
                        <option>Dance</option>
                        <option>Work Out</option>
                        </select>
                    </div>
                </div> 
            </div>''''''''''''
            
            <div class="DropBox" id="dropBox">
                
                <p>Click to add files from your device</p>
                <input
                    type="file"
                    multiple
                    id="upload-button"
                    hidden
                    onChange={props.handleSongUpload}
                    accept="audio/*"
                />
               <label htmlFor="upload-button" id="browse-file" onChange={props.handleSongUpload} className="label-upload" defaultValue={formInfo.song}>
                   Browse file
               </label>
               
                
            </div>
        </form>
    

        <div id="buttonDiv">
            <NavLink to="/dashboard" className="nav-link">
                <Button variant="back" size={"sm"}>Back</Button>
            </NavLink>
           
            <NavLink to="/upload" className="nav-link">
                <Button variant="next" size={"sm"}>Next</Button>
            </NavLink>
        </div>
        </>
    );
}

export {Upload};