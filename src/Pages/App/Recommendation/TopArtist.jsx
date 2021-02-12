import React from "react";
import {Artist1, Artist2, Artist3, Artist4, Artist5, Artist6, Artist7, Artist8, Artist9, Artist10} from '../../../Assets/Artist';

export  function TopArtist() {
  return (
    <div>
    
      <div className="row pt-3 m-0">
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist1}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Wizkid</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist2}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Davido</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist3}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Tiwa</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist4}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Burna Boy</span>
              </div>
            </div>
          </div>
        </div>
           <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist5}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Simi</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist6}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">OmahLay</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist7}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Rema</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist8}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Mr Eazi</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist9}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Naira Marley</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card shadow-sm border-0 rounded genCard">
            <div class="card-body p-0">
              <img
                src={Artist10}
                alt=""
                class="w-100 card-img-top cardImage"
              />
              <div class=" albumInnerText">
                <span class="text-muted songCountDetails">Dbang</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
