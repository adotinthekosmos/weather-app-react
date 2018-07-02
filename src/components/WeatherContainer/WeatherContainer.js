import React    from "react";
import template from "./WeatherContainer.jsx";

class WeatherContainer extends React.Component {
  render() {
    return template.call(this);
  }
}

export default WeatherContainer;
