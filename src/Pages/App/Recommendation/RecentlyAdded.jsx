import React from "react";
import { Trend1, Trend10, Trend2,Trend6, Trend7, Trend8, Trend9 } from "../../../Assets/Trending";


export function RecentlyAdded() {
  return (
    <div>
      <p className="header-text">New Songs</p>
      <div className="row pt-3 m-0">
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Trend7}
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
                src={Trend6}
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
                src={Trend8}
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
                src={Trend9}
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
                src={Trend10}
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
                src={Trend2}
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
                src={Trend1}
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
  );
}
