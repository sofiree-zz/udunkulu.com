import './Finish.css';
import {UploadSuccess} from '../../../Assets/Images';
const Finish =()=>{
    return(
        <>
            <div class="card upload-success">
                <div class="card-body">
                <img src={UploadSuccess} alt="" id="uploadImage"/>
                </div>
              
            </div>
        </>
    );
}

export {Finish};