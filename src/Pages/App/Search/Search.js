import React from 'react';
import Modal from 'react-modal';
import './Search.css';
import {Button} from '../../../Components';
import { UdunkuluVector } from '../../../Assets/Images';


const Search=()=>{
    return(
        <div >
           <div class="modal-content">
              
                    <nav class="navbar m-0" id="nav-bar">
                        <form action=""
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        > 
                            <div class="input-group mb-4 border rounded-pill my-3" id="search">
                                <div class="input-group-append border-0">
                                    <span class="btn"  id="button-addon3"><i class="fa fa-search"></i></span>
                                </div>
                                <input type="search" placeholder="Find song..."  class="form-control border-0" size="50"/>
                               
                            </div>
                        </form>  
                        <Button variant="sign-in" size={"sm"}>Sign In</Button>
                    </nav>

                    <section >
                        <div class="container d-flex flex-column" id="container">
                            <img src={UdunkuluVector} alt="Udunkulu" />
                            <text class="mx-auto" id="container-text">Contents will appear when you search them</text>
                        </div>
                    </section>
               
                </div>
            
        </div>
    );
}
export {Search};