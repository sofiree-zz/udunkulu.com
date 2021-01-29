import "./NavBar.css";
import '../../Pages/App/Search/Search.css';
import { Button } from "../../Components";
import { NavLink, Link } from "react-router-dom";
import { Authentication } from "../../Pages";

const ArtistNavBar = () => {
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
              <div class=" border-0">
                <span class="btn"  id="button-addon4"><i class="fa fa-search"></i></span>
              </div>
              <input type="search" placeholder="Search"  class="form-control border-0" size="50" id="artistInput"/>
                
            </div>
        </form>  
    
        <Button
          variant="sign-in"
          size={"sm"}
          data-target={"#authModal"}
          data-toggle="modal"
        >
          Sign In
        </Button>
    
      </nav>

      <Authentication />
    </div>
  );
};

export { ArtistNavBar };
