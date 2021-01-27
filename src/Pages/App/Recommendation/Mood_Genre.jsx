import React from "react";
import { Mood1,Mood2,Mood3,Mood4,Mood5,Mood6,Mood7,Mood8,Mood9,Mood10 } from "../../../Assets/Moods";
export function Mood_Genre() {
  return (
    <div>
      <p className="header-text">Moods</p>
      <div className="row pt-3 m-0">
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(34, 0, 200, 0.3), rgba(0, 112, 255, 0.2)),url(${Mood7}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Workout</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(239, 5, 5, 0.3), rgba(189, 6, 6, 0.2)),url(${Mood1}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Feel Good</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(241, 255, 82, 0.3), rgba(210, 147, 30, 0.2)),url(${Mood3}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Romance</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(180, 255, 48, 0.49), rgba(102, 151, 114, 0.2)),url(${Mood4}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Focus</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(26, 215, 20, 0.3), rgba(87, 242, 96, 0.2)),url(${Mood5}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Party</span>
            </div>
          </div>
        </div>
        
      </div>


      {/* GENRE */}
      <p className="header-text">Genre</p>
      <div className="row pt-3 m-0">
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(104, 172, 204, 0.3), rgba(123, 199, 255, 0.2)),url(${Mood7}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Pop</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(187, 60, 60, 0.3), rgba(178, 76, 76, 0.2)),url(${Mood5}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">R&amp;B</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(197, 217, 215, 0.3), rgba(166, 208, 225, 0.2) ),url(${Mood1}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Rap</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(239, 5, 5, 0.3), rgba(189, 6, 6, 0.2)),url(${Mood7}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Jazz</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(243, 103, 0, 0.3), rgba(255, 132, 0, 0.2)),url(${Mood5}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Blues</span>
            </div>
          </div>
        </div>

        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(239, 5, 5, 0.3), rgba(189, 6, 6, 0.2)),url(${Mood6}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Metal</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(247, 155, 155, 0.3), rgba(223, 163, 163, 0.2)),url(${Mood7}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Country</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(130, 128, 128, 0.3), rgba(110, 107, 107, 0.2)),url(${Mood8}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Rock</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(239, 5, 5, 0.3), rgba(189, 6, 6, 0.2)),url(${Mood9}`,
            }}
          >
            <div class="m-auto">
              <span class="text-large">Spiritual</span>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
