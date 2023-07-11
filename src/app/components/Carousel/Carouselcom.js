import React, { Component } from "react";
import {
  GET_BANNER_DATA,
  IMAGE_BASE_URL,
  MAIN_URL,
} from "../../utils/apiConstants";
import { get } from "../../utils/apiMethods";
import Loader from "../Loader/Loader";
import "./Carouselcom.css";

export default class Carouselcom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
      loader: false,
    };
  }

  componentDidMount() {
    this.setState({ loader: true });
    this.getBannerData();
  }

  getBannerData = async () => {
    const response = await get({ url: GET_BANNER_DATA });

    if (response) {
      this.setState({ bannerList: response, loader: false });
    }
  };
  render() {
    const { bannerList, loader } = this.state;
    return (
      <div>
        {loader ? (
          <Loader />
        ) : (
          <div
            id="carouselExample"
            class="carousel slide w-100"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            {/* <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="2"
              ></button>
            </div> */}
            <div class="carousel-inner">
              {bannerList &&
                bannerList.map((item, i) => {
                  // console.log("images", `${IMAGE_BASE_URL} ${item.image_url}`);
                  const active = i === 0 ? "active" : "";
                  return (
                    <div class={`carousel-item ${active} `}>
                      <img
                        class="d-block w-100"
                        src={`${IMAGE_BASE_URL}${item.image_url}`}
                        alt="First slide"
                      />
                    </div>
                  );
                })}
            </div>
            <button
              class="carousel-control-prev"
              data-bs-target="#carouselExample"
              type="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              data-bs-target="#carouselExample"
              type="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </div>
    );
  }
}

const Data = [
  {
    imgUrl:
      "http://pralhadjoshi.in/wp-content/uploads/2018/07/PJ-banner-22.jpg",
  },
  {
    imgUrl: "http://pralhadjoshi.in/wp-content/uploads/2018/07/PJ-banner-5.jpg",
  },
  {
    imgUrl:
      "http://pralhadjoshi.in/wp-content/uploads/2018/07/PJ-banner-223.jpg",
  },
];
