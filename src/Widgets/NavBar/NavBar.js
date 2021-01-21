import React from 'react';
import './NavBar.css';
import {Button} from '../../Components';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" >
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Trending<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Mood/Genre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Recently Added</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Top Artists</a>
                    </li>         
                </ul>  
            </div>
            <Button variant="warning" size={"sm"}>SIGN IN</Button>       
        </nav>
    );
}

export { NavBar };
