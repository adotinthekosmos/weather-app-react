import React, { Component } from "react";
import "./WeatherDetail.css";
class WeatherDetail extends Component {
  render() {
    return (
      <div className="weather-detail-container">
        <div className="main-icon">
          <img src={`http://openweathermap.org/img/w/10d.png`} alt="" />
          <div className="icon-overlay" />
        </div>

        <div className="detail-container">
          <div className="weather-detail-content">
            <p className="date">11/11/1998</p>
            <h1 className="location">New York</h1>
            <div>
              <div className="temperature">
                <span className="current-temp">10*C</span>
                <span className="highest-temp">11*c</span>
                <span className="lowest-temp">9*c</span>
              </div>
            </div>
          </div>
        </div>

        <div className="weather-spec">
          <div className="wind">
            <p>
              <i class="wi wi-night-sleet" />
            </p>
            <p>Wind</p>
            <p>120 km/h</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDetail;
