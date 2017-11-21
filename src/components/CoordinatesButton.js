// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
  handleClick = ev => {
    return this.props.onReceiveCoordinates([ev.clientX, ev.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>'Get Coordinates'</button>;
  }
}

export default CoordinatesButton;
