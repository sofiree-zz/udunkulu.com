import './Authentication.css';
import { Facebook, Google, UdunkuluModalLogo } from '../../Assets/Images';
import { Button } from '../../Components';

const Authentication = () => {
    
    return (
        <>
        {/* // <!-- Modal --> */}
        <div class="modal fade" id="authModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="modalDialog">
                <div class="modal-content" id="modalContent">
                    <div class="modal-body" id="modalBodyMain">
                            <img src={UdunkuluModalLogo} alt="" />
                            <text id="modalText">How do you want to use <br/>this service?</text>              
                            <div id="modalButton">
                                <Button variant="artist" size={"lg"} data-target={"#artistLoginModal"} data-toggle="modal" data-dismiss="modal">Artist</Button>
                                <Button variant="listener" size={"lg"} data-target={"#listenerLoginModal"} data-toggle="modal" data-dismiss="modal">Listener</Button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

{/* modal for Artist Login..... */}
        <div class="modal fade" id="artistLoginModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="userModalDialog">
                <div class="modal-content" id="userModalContent">
                    <div id="close-button">
                        <button type="button" class="close "  data-dismiss="modal" aria-label="Close" id="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {/* modal body */}
                    <div class="modal-body" id="userModalBodyMain">
                        <div id="modalLogo">
                            <img src={UdunkuluModalLogo} alt="" />
                            <text id="userModalText">You are signing in as an artist</text>
                        </div>
                            
                        <form id="form">
                            <div class="form-group" id="formGroup">
                                <input class="form-control" 
                                    type="email" 
                                    placeholder="Email" 
                                    id="email" 
                                    name="email"
                                    required
                                />
                            </div>
                            <div class="form-group" id="formGroup">
                                <input class="form-control" 
                                    type="password" 
                                    placeholder="Password" 
                                    id="password" 
                                    name="password"
                                    required
                                />
                            </div>
                                <Button variant="Login" size={"lg"} >SIGN IN</Button>                      
                        </form>
                         {/* forgot password field */}
                        <div id="forgotPassword">
                            <text>Forgot <a href="#" id="recover-text" data-target={"#recoverPasswordModal"} data-toggle="modal" data-dismiss="modal">Password?</a></text>
                            <br/>
                            <text>Don't have an account? <a href="#" id="sign-text" data-target={"#artistSignUpModal"} data-toggle="modal" data-dismiss="modal">Sign up here</a></text>
                        </div>
                        <div>
                            {/* <Facebook/> */}
                            {/* <Google/> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

{/* Modal for Artist Sign Up */}
        <div class="modal fade" id="artistSignUpModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="SignUpModalDialog">
                <div class="modal-content" id="SignUpModalContent">
                    <div id="signup-close-button">
                        <button type="button" class="close "  data-dismiss="modal" aria-label="Close" id="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {/* modal body */}
                    <div class="modal-body" id="SignUpModalBody">
                        <div id="modalLogo">
                            <img src={UdunkuluModalLogo} alt="" />
                            <text id="modalText">Signing Up as an Artist</text>
                        </div>
                            
                        <form id="signup-form">
                            <div class="row"  id="signup-formGroup" >
                                <div class="form-group col">
                                    <input class="form-control" 
                                        type="text" 
                                        placeholder="First Name" 
                                        id="firstName" 
                                        name="firstName"
                                        required
                                    />
                                </div>
                                <div class="form-group col" >
                                    <input class="form-control" 
                                        type="text" 
                                        placeholder="Last Name" 
                                        id="lastName" 
                                        name="lastName"
                                        required
                                    />
                                </div>
                            </div>
                            

                            <div class="row"  id="signup-formGroup">
                                <div class="form-group col" >
                                    <input class="form-control" 
                                        type="email" 
                                        placeholder="Email" 
                                        id="email" 
                                        name="email"
                                        required
                                    />
                                </div>
                                <div class="form-group col" >
                                    <input class="form-control" 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        id="phoneNumber" 
                                        name="phoneNumber"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        required
                                    />
                                </div>
                            </div>
                            

                            <div class="row"  id="signup-formGroup">
                                <div class="form-group col" >
                                    <input class="form-control" 
                                        type="password" 
                                        placeholder="Password" 
                                        id="password" 
                                        name="password"
                                        required
                                    />
                                </div>
                                <div class="form-group col" >
                                    <input class="form-control" 
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        id="confirmPassword" 
                                        name="confirmPassword"
                                        required
                                    />
                                </div>
                            </div>

                                <Button variant="Signup" size={"lg"} >SIGN UP</Button>                        
                        </form>

                         {/* have an account field */}
                        <div id="haveAccount">
                            <text>Already have an account? <a href="#" id="sign-text" data-target={"#artistLoginModal"} data-toggle="modal" data-dismiss="modal">Sign in here</a></text>
                        </div>
                        <div>
                            {/* <Facebook/> */}
                            {/* <Google/> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


{/* LISTENER!!!!! */}


        {/* Modal for Listener Login..... */}

        <div class="modal fade" id="listenerLoginModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="userModalDialog">
                <div class="modal-content" id="userModalContent">
                    <div id="close-button">
                        <button type="button" class="close "  data-dismiss="modal" aria-label="Close" id="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {/* modal body */}
                    <div class="modal-body" id="userModalBodyMain">
                        <div id="modalLogo">
                            <img src={UdunkuluModalLogo} alt="" />
                            <text id="userModalText">You are signing in as a listener</text>
                        </div>
                            
                        <form id="form">
                            <div class="form-group" id="formGroup">
                                <input class="form-control" 
                                    type="email" 
                                    placeholder="Email" 
                                    id="email" 
                                    name="email"
                                    required
                                 />
                            </div>
                            <div class="form-group" id="formGroup">
                                <input class="form-control" 
                                    type="password" 
                                    placeholder="Password" 
                                    id="password" 
                                    name="password"
                                    required
                                />
                            </div>
                            <Button variant="Login" size={"lg"} >SIGN IN</Button>                                              
                        </form>
                         {/* forgot password field */}
                        <div id="forgotPassword">
                        <text>Forgot <a href="#" id="recover-text" data-target={"#recoverPasswordModal"} data-toggle="modal" data-dismiss="modal">Password?</a></text><br/>
                            <text>Don't have an account? <a href="#" id="sign-text" data-target={"#listenerSignUpModal"} data-toggle="modal" data-dismiss="modal">Sign up here</a></text>
                        </div>
                        <div>
                            {/* <Facebook/> */}
                            {/* <Google/> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


        {/* Modal for Listener Sign Up */}

        <div class="modal fade" id="listenerSignUpModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="SignUpModalDialog">
                <div class="modal-content" id="SignUpModalContent">
                    {/* <div class="modal-header"> */}
                        <button type="button" class="close "  data-dismiss="modal" aria-label="Close" id="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    {/* </div> */}
                    {/* modal body */}
                    <div class="modal-body" id="SignUpModalBody">
                        <div id="modalLogo">
                            <img src={UdunkuluModalLogo} alt="" />
                            <text id="modalText">Signing Up as a Listener</text>
                        </div>
                            
                        <form id="form">
                            <div class="row">
                                <div class="form-group col" id="formGroup">
                                    <input class="form-control" 
                                        type="text" 
                                        placeholder="First Name" 
                                        id="firstName" 
                                        name="firstName"
                                        required
                                    />
                                </div>
                                <div class="form-group col" id="formGroup">
                                    <input class="form-control" 
                                        type="text" 
                                        placeholder="Last Name" 
                                        id="lastName" 
                                        name="lastName"
                                        required
                                    />
                                </div>
                            </div>
                            

                            <div class="row">
                                <div class="form-group col" id="formGroup">
                                    <input class="form-control" 
                                        type="email" 
                                        placeholder="Email" 
                                        id="email" 
                                        name="email"
                                        required
                                    />
                                </div>
                                <div class="form-group col" id="formGroup">
                                    <input class="form-control" 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        id="phoneNumber" 
                                        name="phoneNumber"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        required
                                    />
                                </div>
                            </div>
                            

                            <div class="row">
                                <div class="form-group col" id="formGroup">
                                    <input class="form-control" 
                                        type="password" 
                                        placeholder="Password" 
                                        id="password" 
                                        name="password"
                                        required
                                    />
                                </div>
                                <div class="form-group col" id="formGroup">
                                    <input class="form-control" 
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        id="confirmPassword" 
                                        name="confirmPassword"
                                        required
                                    />
                                </div>
                            </div>

                            <div id="modalButton" class="row justify-content-center my-3 px-3">
                                <Button variant="Login" size={"lg"} >SIGN UP</Button>                     
                            </div>
                        </form>

                         {/* have an account field */}
                        <div id="haveAccount">
                            <text>Already have an account? <a href="#" id="sign-text" data-target={"#listenerLoginModal"} data-toggle="modal" data-dismiss="modal">Sign in here</a></text>
                        </div>
                        <div>
                            {/* <Facebook/> */}
                            {/* <Google/> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        {/* FORGOT PASSWORD MODAL */}
        <div class="modal fade" id="recoverPasswordModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="userModalDialog">
                <div class="modal-content" id="userModalContent">
                    {/* <div class="modal-header"> */}
                        <button type="button" class="close "  data-dismiss="modal" aria-label="Close" id="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    {/* </div> */}
                    {/* modal body */}
                    <div class="modal-body" id="userModalBodyMain">
                        <div id="modalLogo">
                            <img src={UdunkuluModalLogo} alt="" />
                            <text class="modalText">Enter your Email to recover <br/> your account </text>
                        </div>
                            
                        <form id="form">
                            <div class="form-group" id="formGroup">
                                <input class="form-control" 
                                    type="email" 
                                    placeholder="Email" 
                                    id="email" 
                                    name="email"
                                    required
                                 />
                            </div>
                       
                            <div id="modalButton" class="row justify-content-center my-3 px-3">
                            <Button variant="Continue" size={"lg"} >CONTINUE</Button>                     
                            </div>
                        </form>
                        
                        
                    </div>
                </div>
            </div>
        </div>



    </>


    );
}
export { Authentication };
