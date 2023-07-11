import React, { Component } from "react";
import "./ProfileMainInfo.css";

export default class ProfileMainInfo extends Component {
  render() {
    const { name, position, electedPlace, General } = this.props;
    return (
      <div class="entry-content">
        <h3>
          <strong>{name}</strong>
        </h3>
        <p>{position}</p>
        <p>{electedPlace}</p>
        <h3>
          <strong>General</strong>
        </h3>
        <p>{General}</p>
      </div>
    );
  }
}
