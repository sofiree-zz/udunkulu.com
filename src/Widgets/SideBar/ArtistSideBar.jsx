 import { ProfilePhoto, UdunkuluLogo } from "../../Assets/Images";
import { Home, Upload } from "../../Assets/Icons";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { LogOutButton } from "../../Components/Buttons/LogOut";

const ArtistSidebar = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
      <section>
        <div class="sidebar" id="sidebar-wrapper">
          <NavLink to="/" className="nav-link">
            <img
              class="sidebar-header"
              src={UdunkuluLogo}
              alt="Udunkulu"
              href="/"
            />
          </NavLink>

          <ul class="list-group flex-column d-inline-block list-group-sidebar">
            <li class="list-item">
              <NavLink to="/dashboard" className="nav-link">
                <button type="button" class="btn btn-dark" id="button-border">
                  <img src={Home} alt="" />
                </button>
                <p>Home</p>
              </NavLink>
            </li>

            <li class="list-item">
              <NavLink to="/upload-your-music" className="nav-link">
                <button type="button" class="btn btn-dark" id="button-border">
                  <img src={Upload} alt="" />
                </button>
                <p>Upload</p>
              </NavLink>
            </li>
          </ul>
          <ul class="list-group flex-column d-inline-block list-group-sidebar pad-top">
            <li class="list-item" id="listItem">
              {isLoggedIn ? <LogOutButton /> : null}
            </li>
          </ul>
        </div>
      </section>
  );
};

export { ArtistSidebar };
