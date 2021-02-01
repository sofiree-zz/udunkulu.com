import './Authentication.css';
import { UdunkuluModalLogo } from '../../Assets/Images';
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
                        <button type="button" class="close" data-target={"#authModal"} data-toggle="modal" data-dismiss="modal" id="close">
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
                                <input class="form-control form-control-login" 
                                    type="email" 
                                    placeholder="Email" 
                                    id="email" 
                                    name="email"
                                    required
                                />
                            </div>
                            <div class="form-group" id="formGroup">
                                <input class="form-control form-control-login" 
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
                        
                        
                    </div>
                </div>
            </div>
        </div>

{/* Modal for Artist Sign Up */}
        <div class="modal fade" id="artistSignUpModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="SignUpModalDialog">
                <div class="modal-content" id="SignUpModalContent">
                    <div id="signup-close-button">
                        <button type="button" class="close" data-target={"#authModal"} data-toogle="modal" data-dismiss="modal" id="close">
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
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group" id="signup-formGroup">
                                        <input class="form-control form-control-signup" 
                                            type="text" 
                                            placeholder="Artist Name" 
                                            id="firstName" 
                                            name="firstName"
                                            required
                                        />
                                    </div>

                                    <div class="form-group" >
                                        <input class="form-control form-control-signup" 
                                            type="email" 
                                            placeholder="Email" 
                                            id="email" 
                                            name="email"
                                            required
                                        />
                                    </div>

                                    <div class="form-group" >
                                        <input class="form-control form-control-signup" 
                                            type="password" 
                                            placeholder="Password" 
                                            id="password" 
                                            name="password"
                                            required
                                        />
                                    </div>
                                    {/* col1 ends */}
                                </div>

                                <div class="col-sm">
                                    <div class="form-group " >
                                        <input class="form-control form-control-signup" 
                                            type="text" 
                                            placeholder="Stage Name" 
                                            id="lastName" 
                                            name="lastName"
                                            required
                                        />
                                    </div>

                                    <div class="form-group " >
                                        <input class="form-control form-control-signup" 
                                            type="tel" 
                                            placeholder="Phone Number" 
                                            id="phoneNumber" 
                                            name="phoneNumber"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            required
                                        />
                                    </div>

                                    <div class="form-group" >
                                        <input class="form-control form-control-signup" 
                                            type="password" 
                                            placeholder="Confirm Password" 
                                            id="confirmPassword" 
                                            name="confirmPassword"
                                            required
                                        />
                                    </div>
                                    {/* col2 ends */}
                                </div>
                                {/* row end */}
                            </div>
                            <Button variant="Signup" size={"lg"} >SIGN UP</Button>                        
                        </form>

                         {/* have an account field */}
                        <div id="haveAccount">
                            <text>Already have an account? <a href="#" id="sign-text" data-target={"#artistLoginModal"} data-toggle="modal" data-dismiss="modal">Sign in here</a></text>
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
                        <button type="button" class="close " data-target={"#authModal"} data-toogle="modal" data-dismiss="modal" aria-label="Close" id="close">
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
                                <input class="form-control form-control-login" 
                                    type="email" 
                                    placeholder="Email" 
                                    id="email" 
                                    name="email"
                                    required
                                 />
                            </div>
                            <div class="form-group" id="formGroup">
                                <input class="form-control form-control-login" 
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
                        
                        
                    </div>
                </div>
            </div>
        </div>


        {/* Modal for Listener Sign Up */}
{/* */}
{/*  */}
<div class="modal fade" id="listenerSignUpModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="SignUpModalDialog">
                <div class="modal-content" id="SignUpModalContent">
                    <div id="signup-close-button">
                        <button type="button" class="close " data-target={"#authModal"} data-toggle="modal" data-dismiss="modal" aria-label="Close" id="close">
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
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group" id="signup-formGroup">
                                        <input class="form-control form-control-signup" 
                                            type="text" 
                                            placeholder="First Name" 
                                            id="firstName" 
                                            name="firstName"
                                            required
                                        />
                                    </div>

                                    <div class="form-group" >
                                        <input class="form-control form-control-signup" 
                                            type="email" 
                                            placeholder="Email" 
                                            id="email" 
                                            name="email"
                                            required
                                        />
                                    </div>

                                    <div class="form-group" >
                                        <input class="form-control form-control-signup" 
                                            type="password" 
                                            placeholder="Password" 
                                            id="password" 
                                            name="password"
                                            required
                                        />
                                    </div>
                                    {/* col1 ends */}
                                </div>

                                <div class="col-sm">
                                    <div class="form-group " >
                                        <input class="form-control form-control-signup" 
                                            type="text" 
                                            placeholder="Last Name" 
                                            id="lastName" 
                                            name="lastName"
                                            required
                                        />
                                    </div>

                                    <div class="form-group " >
                                        <input class="form-control form-control-signup" 
                                            type="tel" 
                                            placeholder="Phone Number" 
                                            id="phoneNumber" 
                                            name="phoneNumber"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            required
                                        />
                                    </div>

                                    <div class="form-group" >
                                        <input class="form-control form-control-signup" 
                                            type="password" 
                                            placeholder="Confirm Password" 
                                            id="confirmPassword" 
                                            name="confirmPassword"
                                            required
                                        />
                                    </div>
                                    {/* col2 ends */}
                                </div>
                                {/* row end */}
                            </div>
                            <Button variant="Signup" size={"lg"} >SIGN UP</Button>                        
                        </form>

                         {/* have an account field */}
                        <div id="haveAccount">
                            <text>Already have an account? <a href="#" id="sign-text" data-target={"#listenerLoginModal"} data-toggle="modal" data-dismiss="modal">Sign in here</a></text>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>


{/* RECOVER PASSWORD MODAL */}

<div class="modal fade" id="recoverPasswordModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" id="userModalDialog">
                <div class="modal-content" id="userModalContent">
                    <div id="close-button">
                        <button type="button" class="close " data-target={"#authModal"} data-toggle="modal" data-dismiss="modal" aria-label="Close" id="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {/* modal body */}
                    <div class="modal-body" id="userModalBodyMain">
                        <div id="modalLogo">
                            <img src={UdunkuluModalLogo} alt="" />
                            <text id="userModalText">Enter your email to recover<br/>your password</text>
                        </div>
                            
                        <form id="form">
                            <div class="form-group" id="formGroup">
                                <input class="form-control form-control-login" 
                                    type="email" 
                                    placeholder="Email" 
                                    id="email" 
                                    name="email"
                                    required
                                />
                            </div>
                            
                                <Button variant="Login" size={"lg"} >CONTINUE</Button>                      
                        </form>
                     
                    </div>
                </div>
            </div>
        </div>

    </>


    );
}
export { Authentication };
