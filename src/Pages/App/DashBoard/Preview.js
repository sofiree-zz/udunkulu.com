import './Preview.css';
import './Upload.css';
import './UploadingPage.css';
import {NavLink} from 'react-router-dom';
import {AlbumImage} from '../../../Assets/Images';
import {Button} from '../../../Components';

const Preview =(props)=>{
    const formInfo = props.formInfo
    console.log(formInfo)
        var image = URL.createObjectURL(formInfo.albumCover)
        console.log(image)
    return(
        <>
            <div class="row p-1 d-flex justify-content-space-evenly preview-row spacer">
                <div class="col general-details">
                    <div><text><strong>Album:</strong>{formInfo.title}</text></div>
                    <div><text><strong>Released:</strong> {formInfo.released}</text></div>
                    <div class="card" id="songCard">
                        <div class="card-body">
                            <img class="innerAlbumCoverImage" src={image} alt=""/>
                        </div>
                    </div>
                </div>

                <div class="col song-details">
                    <div id="songName">{formInfo.song.name}</div>
                </div>
            </div>

            <div id="buttonDiv">
               
                  <Button variant="back" size={"sm"} onClick={props.prev}>Back</Button>
              
                
               
                    <Button variant="next" size={"sm"} type="submit">Finish</Button>
            
            </div>
        </>
    );
}

export {Preview};