import { ProfilePhoto, UdunkuluLogo } from '../../Assets/Images';
import { Home,LogOut,Upload } from '../../Assets/Icons';
import './SideBar.css';
import { NavLink } from "react-router-dom";
import { LogOutButton } from '../../Components/Buttons/LogOut';



const ArtistSidebar=()=>{
    return(
        <section>
         <div class="sidebar" id="sidebar-wrapper">
            <img class="sidebar-header" src={UdunkuluLogo} alt="Udunkulu" href="/" />
            <ul class="list-group flex-column d-inline-block list-group-sidebar">
                <li class="list-item">
                    <NavLink to="/dashboard" className="nav-link">
                       <button type="button" class="btn btn-dark" id="button-border"><img src={Home} alt=""/></button> 
                       Home
                    </NavLink>
                </li>

                <li class="list-item">
                <NavLink to="/upload-your-music" className="nav-link">
                    <button type="button" class="btn btn-dark" id="button-border"><img src={Upload} alt=""/></button> 
                        Upload
                </NavLink>
                </li>

            </ul>
            <ul class="list-group flex-column d-inline-block list-group-sidebar pad-top">
                <li class="list-item">
                    {/* TODO replace Udunku logo with dynamic artist img and avatar */}
                    <img src={ProfilePhoto} alt="" className=" btn profilePhoto"/>
                    <LogOutButton/>
                </li>
            </ul>
            
        </div>
        </section>
    );
}

export {ArtistSidebar};