import React, { Component } from "react";

class Fan extends Component {
  render() {
    return (
      <div>
        {this.props.temp > 82 ? (
          <button className="button" style={{ backgroundColor: "red" }}>
            {this.props.temp}
          </button>
        ) : (
          <button className="button" style={{ backgroundColor: "green" }}>
            {this.props.temp}
          </button>
        )}
      </div>
    );
  }
}

export default Fan;
