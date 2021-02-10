// import {useHistory} from "react-router-dom";

import {useState} from "react";
import { NavLink } from "react-router-dom";
import { UdunkuluLogo, ProfilePhoto } from '../../Assets/Images';
import {Home, SearchIcon} from '../../Assets/Icons';
import { ArtistHomePage, Search } from "../../Pages";
import './SideBar.css';
import { LogOutButton } from "../../Components/Buttons/LogOut";



const Sidebar=()=>{
    return(
        <section>
         <div class="sidebar" id="sidebar-wrapper">
             <NavLink to='/trending' className='nav-link'>
                <img class="sidebar-header" src={UdunkuluLogo} alt="Udunkulu"/>
             </NavLink>
            
            <ul class="list-group flex-column d-inline-block list-group-sidebar">
                <li class="list-item">
                    <NavLink to='/trending' className="nav-link">
                       <button type="button" class="btn btn-dark" id="button-border"><img src={Home} alt=""/></button> 
                    </NavLink>
                </li>

                <li class="list-item">
                    {/* TODO clean up active state */}
                    <NavLink to='/search' className="nav-link">
                    <button type="button" class="btn btn-dark" id="button-border"><img src={SearchIcon} alt=""/></button>
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

export {Sidebar};