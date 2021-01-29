// import {useHistory} from "react-router-dom";

import {useState} from "react";
import { UdunkuluLogo } from '../../Assets/Images';
import { Home,LogOut,Upload } from '../../Assets/Icons';
import './SideBar.css';
import { NavLink } from "react-router-dom";



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
                    <a class="nav-link" href="#">
                       
                    </a>
                </li>
                <li class="list-item">
                    {/* TODO replace Udunku logo with dynamic artist img and avatar */}
                    <img src={UdunkuluLogo} alt="" className=" btn logOutBtn"/>
                    <a class="nav-link" href="#">
                    <img src={LogOut} alt="" className="btn logOutBtn" id="butto-border"/>
                        <span>Logout</span>
                         
                    </a>
                </li>
            </ul>
            
        </div>
        </section>
    );
}

export {ArtistSidebar};