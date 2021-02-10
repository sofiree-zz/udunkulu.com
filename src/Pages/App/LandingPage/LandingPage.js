import './LandingPage.css';
import { UdunkuluLady, UdunkuluLogo1} from '../../../Assets/Images';
import { Button } from '../../../Components';
import { NavLink } from "react-router-dom";

const LandingPage =()=>{
    return(
        <div class="landingPage">
            <div class="row">
                <div class="col" id="landingPageContent">
                    <img src={UdunkuluLogo1} alt="" id="UdunkuluLogo1"/>
                    <div class="landingPageText">
                        <h1>Get connected to<br/>original Nigerian<br/>Music Content</h1>
                        <p>To get started, click on the button below</p>

                        <NavLink to="/trending" className="nav-link">
                            <div id="landingPageButton">
                                <Button variant="Continue" size={"sm"} >Continue</Button>                     
                            </div>
                        </NavLink>
                        
                    </div>  
                </div>

                <img  class="col" src={UdunkuluLady} alt="" id="landingPageImage"/>
                
            </div>
        </div>
    );
}

export {LandingPage};