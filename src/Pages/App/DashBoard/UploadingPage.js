import {useState} from 'react';
import '../DashBoard/Upload.css';
import './UploadingPage.css';
import {NavLink} from 'react-router-dom';
import {Button} from '../../../Components';

const UploadingPage=(props)=>{

    const [progress, setProgress] = useState(0);  

    return(
        <>
            <div class="DropBox" id="dropBox">   
                    <p>Click to add files from your device</p>
                    <input
                        type="file"
                        multiple
                        id="upload-button"
                        hidden
                        
                        /*onChange={handleChange}*/
                    />
                <label htmlFor="upload-button" id="browse-file" /*onClick={handleUpload}*/>
                    Browse file
                </label>    
            </div>

            <section id="uploadStatus">
                <div class="TrackInfo">Track Number + Track Name</div>
                <div class="TrackStatus d-flex" >
                  <div id="size"><text>Uploading...</text> + File.Size</div>
                  <i class="fas fa-trash"></i>
                </div>

            <div class="progress">
                <div
                    class="progress-bar progress-bar-info"
                    role="progressbar"
                    ariavaluenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: progress + "%"}}
                >
                    {progress}%
                </div>
            </div>
            </section>

            <div id="buttonDiv">
                <NavLink to="/upload-your-music" className="nav-link">
                    <Button variant="back" size={"sm"}>Back</Button>
                </NavLink>
                <NavLink to="/preview-song-upload" className="nav-link">
                    <Button variant="next" size={"sm"}>Next</Button>
                </NavLink>
            </div>
        </>
    );
}
export {UploadingPage};
