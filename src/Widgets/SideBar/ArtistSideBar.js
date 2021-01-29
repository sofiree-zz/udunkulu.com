import './SideBar.css';
import { UdunkuluLogo } from '../../Assets/Images';


const ArtistSideBar=()=>{
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
                        <button type="button" class="btn btn-dark" id="button-border"><i class="fas fa-cloud-upload-alt"></i></button>
                        </a>
                    </li>


                    <li class="listItem">
                        <a class="nav-link" href="#">
                        <button type="button" class="btn btn-dark" id="buttonBorder"><i class="fas fa-power-off"></i></button>
                        <text>Logout</text>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

    );
}

export{ArtistSideBar};