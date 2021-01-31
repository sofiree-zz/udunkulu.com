import React from "react";
import "./Result.css";

export function SearchResult() {
  return (
    <div className="top-align">
      {/* Fixed menu bar */}

      <div class=" nav-bar-mobile">
        <ul class="nav navbar-nav-mobile" id="myTab" role="tablist">
          <li class="nav-item pl-0">
            <a
              class="nav-link active"
              id="one-tab"
              data-toggle="tab"
              href="#one"
              role="tab"
              aria-controls="One"
              aria-selected="true"
            >
              Songs
            </a>
          </li>
          <li class="nav-item pl-0">
            <a
              class="nav-link"
              id="two-tab"
              data-toggle="tab"
              href="#two"
              role="tab"
              aria-controls="Two"
              aria-selected="false"
            >
              Albums
            </a>
          </li>
          <li class="nav-item pl-0">
            <a
              class="nav-link"
              id="three-tab"
              data-toggle="tab"
              href="#three"
              role="tab"
              aria-controls="Three"
              aria-selected="false"
            >
              Artist
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-content row " id="myTabContent">
        <div
          class="tab-pane fade show active p-3"
          id="one"
          role="tabpanel"
          aria-labelledby="one-tab"
        >
          <div className="row pt-3 m-0">
            {/* TODO import cards and pass props */}
            <div className="item">
              <div class="card shadow-sm border-0 rounded genCard">
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top cardImage"
                  />
                  <div class="songInnerText">
                    <span class="songName">Fem</span>
                    <span class="text-muted songCountDetails">
                      Davido: 9.7K plays
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div class="card shadow-sm border-0 rounded genCard">
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top cardImage"
                  />
                  <div class="songInnerText">
                    <span class="songName">Fem</span>
                    <span class="text-muted songCountDetails">
                      Davido: 9.7K plays
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div class="card shadow-sm border-0 rounded genCard">
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top cardImage"
                  />
                  <div class="songInnerText">
                    <span class="songName">Fem</span>
                    <span class="text-muted songCountDetails">
                      Davido: 9.7K plays
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div class="card shadow-sm border-0 rounded genCard">
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top cardImage"
                  />
                  <div class="songInnerText">
                    <span class="songName">Fem</span>
                    <span class="text-muted songCountDetails">
                      Davido: 9.7K plays
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div class="card shadow-sm border-0 rounded genCard">
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top cardImage"
                  />
                  <div class="songInnerText">
                    <span class="songName">Fem</span>
                    <span class="text-muted songCountDetails">
                      Davido: 9.7K plays
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div class="card shadow-sm border-0 rounded genCard">
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top cardImage"
                  />
                  <div class="songInnerText">
                    <span class="songName">Fem</span>
                    <span class="text-muted songCountDetails">
                      Davido: 9.7K plays
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div class="card shadow-sm border-0 rounded genCard">
                <div class="card-body p-0">
                  <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                    alt=""
                    class="w-100 card-img-top cardImage"
                  />
                  <div class="songInnerText">
                    <span class="songName">Fem</span>
                    <span class="text-muted songCountDetails">
                      Davido: 9.7K plays
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade p-3"
          id="two"
          role="tabpanel"
          aria-labelledby="two-tab"
        >
          <h5 class="card-title">Tab Card Two</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>

        <div
          class="tab-pane fade p-3"
          id="three"
          role="tabpanel"
          aria-labelledby="three-tab"
        >
          <h5 class="card-title">Tab Card Three</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
