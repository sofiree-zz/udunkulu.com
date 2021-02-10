import React from "react";
import "./Result.css";
import { Artist1, Artist2 } from "../../../Assets/Artist";
import { Trend1 } from "../../../Assets/Trending";

export function SearchResult({ albums, artists, songs }) {
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
              Songs<span className="text-muted lead">({songs.length})</span>
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
              Artist<span className="text-muted lead">({artists.length})</span>
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
              Albums<span className="text-muted lead">({albums.length})</span>
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
            {songs &&
              songs.length > 0 &&
              songs.map((song) => (
                <div className="item">
                  <div class="card shadow-sm border-0 rounded genCard">
                    <div class="card-body p-0">
                      <img
                        src={Trend1}
                        alt=""
                        class="w-100 card-img-top cardImage"
                      />
                      <div class="songInnerText">
                        <span class="songName">{song.title.slice(0, 10)}</span>
                        <span class="text-muted songCountDetails">
                          Davido:
                          {song.noOfPlays ? song.noOfPlays : 2000 / 1000}K plays
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div
          class="tab-pane fade p-3"
          id="two"
          role="tabpanel"
          aria-labelledby="two-tab"
        >
          <div>
            <div className="row pt-3 m-0">
              {artists &&
                artists.length > 0 &&
                artists.map((artist) => (
                  <div className="item">
                    <div class="card shadow-sm border-0 rounded genCard">
                      <div class="card-body p-0">
                        <img
                          src={artist.image}
                          alt=""
                          class="w-100 card-img-top cardImage"
                        />
                        <div class=" albumInnerText">
                          <span class="songName">{artist.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade p-3"
          id="three"
          role="tabpanel"
          aria-labelledby="three-tab"
        >
          <div>
            <div className="row pt-3 m-0">
              {albums &&
                albums.length > 0 &&
                albums.map((album) => (
                  <div className="item">
                    <div class="card shadow-sm border-0 rounded genCard">
                      <div class="card-body p-0">
                        <img
                          src={Artist2}
                          alt=""
                          class="w-100 card-img-top cardImage"
                        />
                        <div class=" albumInnerText">
                          <span class="songName">{album.title}</span>
                          <span class="text-muted songCountDetails">
                            Davido
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
