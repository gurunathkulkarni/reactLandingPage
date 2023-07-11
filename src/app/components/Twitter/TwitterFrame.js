import React, { Component } from "react";

export default class Twitterframe extends Component {
  render() {
    const { width = "340", height = "500" } = this.props;
    return (
      <div>
        <a
          class="twitter-timeline"
          data-width="400"
          data-height="500"
          href="https://twitter.com/anandmamani?ref_src=twsrc%5Etfw"
        >
          Tweets by anandmamani
        </a>{" "}
        {/* <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script> */}
      </div>
    );
  }
}
{
  /* <a class="twitter-timeline" href="https://twitter.com/anandmamani?ref_src=twsrc%5Etfw">Tweets by anandmamani</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */
}
