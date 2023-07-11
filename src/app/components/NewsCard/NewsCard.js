import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { GET_GALLERY_DATA, IMAGE_BASE1_URL } from "../../utils/apiConstants";

import "./NewsCard.css";

class NewsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, isHome, images, titlee, description, id } = this.props;

    return (
      <div className="homecard">
        {isHome && isHome ? (
          <div className="row">
            <div
              onClick={() => history.push(`details/${id}`)}
              class="blog-card1 col-md-4"
            >
              <div class="meta1">
                <div class="photo">
                  <img className="imgClass" src={IMAGE_BASE1_URL + images} />
                </div>
                <ul class="details">
                  <li class="author">
                    <a href="#">Get More Info</a>
                  </li>
                </ul>
              </div>
              <div class="description">
                <h2 className="descriptionH2">
                  {titlee && titlee.slice(0, 500)}...
                </h2>
                <p> {description && description.slice(0, 150)}....</p>
                <p
                  class="read-more"
                  onClick={() => history.push(`details/${id}`)}
                >
                  Know More
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div class="blog-card col-md-12">
              <div class="meta">
                <div>
                  <img className="imgClass" src={IMAGE_BASE1_URL + images} />
                </div>
                <ul class="details">
                  <li class="author">
                    <a href="#">Get More Info</a>
                  </li>
                </ul>
              </div>
              <div class="description">
                <h2 className="descriptionH2">{titlee}</h2>
                <p> {description && description.slice(0, 200)}....</p>
                <p
                  class="read-more"
                  onClick={() => history.push(`details/${id}`)}
                >
                  Know More
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default withRouter(NewsCard);
