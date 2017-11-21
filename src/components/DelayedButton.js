// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component {
  handleClick = ev => {
    ev.persist();
    setTimeout(() => {
      this.props.onDelayedClick(ev);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}

export default DelayedButton;
