
import './NavBar.css';
import { Button } from '../../Components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Authentication } from '../../Pages';


const NavBar = () => {


    return (
       
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav" id="navbar-list">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trending<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mood/Genre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Recently Added</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Top Artists</a>
                        </li>
                    </ul>

                    <Button variant="sign-in" size={"sm"} data-target={"#authModal"} data-toggle="modal">Sign In</Button>
                </div>
               
            </nav>

            <Authentication />
        </div>

    );
}

export { NavBar };
