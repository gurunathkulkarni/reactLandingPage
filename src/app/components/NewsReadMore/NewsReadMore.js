import React, { Component } from "react";
import { IMAGE_BASE_URL } from "../../utils/apiConstants";
import "./NewsReadMore.css";

export default class NewsReadMore extends Component {
  render() {
    const { details } = this.props;
    return (
      <>
        <div className="row">
          <div className="col-md-10">
            <div class="entry-content">
              <p style={{ textAlign: "justify" }}>
                {details && details.length && details[0].description}
              </p>

              {details &&
                details.length &&
                details[0].images &&
                details[0].images.map((item, i) => {
                  // console.log("IMAGES", item);
                  return (
                    <p className="contentList">
                      <img
                        class="aligncenter"
                        src={`${IMAGE_BASE_URL}/${item}`}
                        alt=""
                        width="600"
                        height="400"
                      />
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
