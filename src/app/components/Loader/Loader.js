import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
