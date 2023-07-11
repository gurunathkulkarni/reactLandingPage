import React, { Component } from "react";

export default class FbIframe extends Component {
  render() {
    const { width = "340", height = "500" } = this.props;
    return (
      <div>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fanandcmamani&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width={width}
          height={height}
          styles="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  }
}
{
  /* <a class="twitter-timeline" href="https://twitter.com/anandmamani?ref_src=twsrc%5Etfw">Tweets by anandmamani</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */
}
