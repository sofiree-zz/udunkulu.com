import './Authentication.css';
import { UdunkuluModalLogo } from '../../Assets/Images';
import { Button } from '../../Components';

const Authentication = () => {
    
    return (
        // <!-- Modal -->
        <div class="modal fade" id="authModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="modalDialog">
                <div class="modal-content" id="modalContent">
                    {/* <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div> */}
                    <div class="modal-body" id="modalBodyMain">
                        {/* <div id="modalBody"> */}
                            <img src={UdunkuluModalLogo} alt="" />
                            <text class="modalText">How do you want to use <br/>this service?</text>
                        {/* </div> */}
                        <div id="modalButton">
                            <Button variant="artist" size={"lg"} >Artist</Button>
                            <Button variant="listener" size={"lg"} >Listener</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export { Authentication };