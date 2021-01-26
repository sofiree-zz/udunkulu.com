import React from "react";
import { NavBar, Sidebar } from "../Widgets";
import "./App_layout.css";

export function App_layout() {
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
          <div class="row pb-5 mb-4">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div
                class="card shadow-sm border-0 rounded"
                style={{
                  borderBottomLeftRadius: "15px !important",
                  borderBottomRightRadius: "15px !important",
                  overflow: "hidden",
                }}
              >
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top"
                  />
                  <div class="">
                    <span class="">Fem</span>
                    <span class="text-muted">Davido: 9.7K plays</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div
                class="card shadow-sm border-0 rounded"
                style={{
                  borderBottomLeftRadius: "15px !important",
                  borderBottomRightRadius: "15px !important",
                  overflow: "hidden",
                }}
              >
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top"
                  />
                  <div class="">
                    <span class="">Fem</span>
                    <span class="text-muted">Davido: 9.7K plays</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div
                class="card shadow-sm border-0 rounded"
                style={{
                  borderBottomLeftRadius: "15px !important",
                  borderBottomRightRadius: "15px !important",
                  overflow: "hidden",
                }}
              >
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top"
                  />
                  <div class="">
                    <span class="">Fem</span>
                    <span class="text-muted">Davido: 9.7K plays</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div
                class="card shadow-sm border-0 rounded"
                style={{
                  borderBottomLeftRadius: "15px !important",
                  borderBottomRightRadius: "15px !important",
                  overflow: "hidden",
                }}
              >
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top"
                  />
                  <div class="">
                    <span class="">Fem</span>
                    <span class="text-muted">Davido: 9.7K plays</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div
                class="card shadow-sm border-0 rounded"
                style={{
                  borderBottomLeftRadius: "15px !important",
                  borderBottomRightRadius: "15px !important",
                  overflow: "hidden",
                }}
              >
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top"
                  />
                  <div class="">
                    <span class="">Fem</span>
                    <span class="text-muted">Davido: 9.7K plays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* sdsd */}
        </main>
      </div>
    </div>
  );
}
