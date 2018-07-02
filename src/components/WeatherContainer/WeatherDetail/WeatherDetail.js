import React    from "react";
import template from "./WeatherDetail.jsx";

class WeatherDetail extends React.Component {
  render() {
    return template.call(this);
  }
}

export default WeatherDetail;
