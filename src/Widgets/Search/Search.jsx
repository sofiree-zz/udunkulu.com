import React from 'react';
import { Button } from '../../Components';
import './Search.css'

export   function Search() {
    return (
        <div>
       <nav class="navbar m-0" id="search-bar">
        <form action=""
            onSubmit={(e) => {
                e.preventDefault();
            }}
            class="search-form"
            id="searchForm"
        > 
            <div class="input-group mb-4  my-3" id="searchArtist">
              <div class=" border-0" id="addOn4">
                <span class="btn"  id="button-addon4"><i class="fa fa-search"></i></span>
              </div>
              <input type="search" placeholder="Search"  class="form-control" size="50" id="artistInput"/>
                
            </div>
        </form>  
        <Button variant="Sign-in" size={"sm"} data-target={"#authModal"} data-toggle="modal" style={{marginRight: '1.1em'}}>Sign In</Button>
      </nav>
        </div>
    )
}
