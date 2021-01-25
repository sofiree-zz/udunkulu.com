import React from 'react';
import Modal from 'react-modal';
import './Search.css';
import {Button} from '../../../Components';
import { UdunkuluVector } from '../../../Assets/Images';


const Search=()=>{
    return(
           <div class="content">
              
                <nav class="navbar m-0" id="nav-bar">
                    <form action=""
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        class="search-form"
                    > 
                        <div class="input-group mb-4  my-3" id="search">
                            <div class=" border-0">
                                <span class="btn"  id="button-addon3"><i class="fa fa-search"></i></span>
                            </div>
                            <input type="search" placeholder="Find song..."  class="form-control border-0" size="50" id="input"/>
                            
                        </div>
                    </form>  
                    <Button variant="sign-in" size={"sm"} data-target={"#authModal"} data-toggle="modal">Sign In</Button>
                </nav>

                    
                <div class="d-flex flex-column" id="container">
                    <img src={UdunkuluVector} alt="Udunkulu" />
                    <text class="mx-auto" id="text">Contents will appear when you search them</text>
                </div>
                   
            </div>
            
        
    );
}
export {Search};