import React from "react";
import { NavBar, Sidebar } from "../Widgets";
import "./App_layout.css";

export function App_layout(props) {
  const childElement  = props.children
  return (
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block  sidebar ratio-sidebar">
          <div class="sidebar-sticky">
            <div class="nav flex-column">
              <Sidebar />
            </div>
          </div>
        </nav>{" "}
        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 ratio-main"
        >
          {/* <!-- DYNAMIC NAVBAR --> */}

          <NavBar />

          {/* SPACER HERE */}
          <div id="spacer"></div>

          {/* <!-- DYNAMIC CONTENT --> */}
          <div class="lowerContainer">
            {childElement}
          </div>
          {/* sdsd */}

        </main>
      </div>
    </div>
  );
}
