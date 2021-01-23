// import {useHistory} from "react-router-dom";

import {useState} from "react";
import { UdunkuluLogo } from '../../Assets/Images';
import { Search } from "../../Pages";
import './SideBar.css';



const Sidebar=()=>{

    const [showSearch, setShowSearch] = useState(false);
    let searchBtn 
    if(showSearch) {
        searchBtn =  <Search/>
    }


    return(
        <section>
        <div class="sidebar" id="sidebar-wrapper">
            <img class="sidebar-header" src={UdunkuluLogo} alt="Udunkulu" href="/" />
            <ul class="list-group flex-column d-inline-block">
                <li class="list-item">
                    <a class="nav-link" href="#">
                       <button type="button" class="btn btn-dark" id="button-border"><i class="fas fa-home"></i></button> 
                    </a>
                </li>

                <li class="list-item">
                    <a class="nav-link" href="#">
                    <button type="button" class="btn btn-dark" id="button-border" onClick={() => setShowSearch(!showSearch)}><i class="fas fa-search"></i></button>
                    </a>
                </li>
            </ul>
            
        </div>
        {searchBtn}
        </section>
    );
}

export {Sidebar};