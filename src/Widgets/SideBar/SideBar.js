import { UdunkuluLogo } from '../../Assets/Images';
import './SideBar.css';

const Sidebar=()=>{
    return(
        <div class="sidebar" id="sidebar-wrapper">
            <img class="sidebar-header" src={UdunkuluLogo} alt="Udunkulu" href="/" />
            <ul class="list-group flex-column d-inline-block">
                <li class="list-item">
                    <a class="nav-link" href="/">
                       <button type="button" class="btn btn-secondary"><i class="fas fa-home"></i></button> 
                    </a>
                </li>

                <li class="list-item">
                    <a class="nav-link" href="/">
                    <button type="button" class="btn btn-secondary"><i class="fas fa-search"></i></button>
                    </a>
                </li>
            </ul>

        </div>
    );
}

export {Sidebar};