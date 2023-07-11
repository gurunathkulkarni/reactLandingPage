import React, { Component } from "react";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
          </div>
          <button
            type="button"
            class="btn btn-outline-secondary btn-notfound"
          >
            Go To HomePage{" "}
          </button>{" "}
        </div>
      </div>
    );
  }
}
