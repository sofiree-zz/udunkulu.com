import './Preview.css';
import './Upload.css';
import './UploadingPage.css';
import {AlbumImage} from '../../../Assets/Images';
import {Button} from '../../../Components';

const Preview =(props)=>{
    const formInfo = props.formInfo
    console.log(formInfo)
    return(
        <>
            <div class="row p-1 d-flex justify-content-space-evenly preview-row">
                <div class="col general-details">
                    <div><text><strong>Album:</strong> Album.Titile</text></div>
                    <div><text><strong>Released:</strong> {formInfo.release}</text></div>
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
                <Button variant="back" size={"sm"} onClick={props.prev}>Back</Button>
                <Button variant="next" size={"sm"} type="submit">Finish</Button>
            </div>
        </>
    );
}

export {Preview};