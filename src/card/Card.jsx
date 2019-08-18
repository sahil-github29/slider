import React, { Component } from "react";
import "./Card.scss";

class MleExceptions extends Component {
  state = { backClass: "", frontClass: "" };
  changeSide = side => {
    if (side === "front") {
      this.setState({ frontClass: "rotate-180", backClass: "rotate0" });
    } else if (side === "back") {
      this.setState({ frontClass: "rotate0", backClass: "rotate180" });
    }
  };
  render() {
    const frontClass = "card__side card__side--front " + this.state.frontClass;
    const backClass = "card__side card__side--back " + this.state.backClass;
    return (
      <div className="card">
        <div className={frontClass} onClick={() => this.changeSide("front")}>
          front
        </div>
        <div className={backClass} onClick={() => this.changeSide("back")}>
          back
        </div>
      </div>
    );
  }
}

export default MleExceptions;
