import React, { Component } from "react";
import NewsReadMore from "../../../components/NewsReadMore/NewsReadMore";
import { GET_GALLERY_DATA } from "../../../utils/apiConstants";
import { get } from "../../../utils/apiMethods";
import "./ReadMore.css";
import Loader from "../../../components/Loader/Loader";

export default class ReadMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      loader: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ loader: true });
    this.getDetails();
  }

  getDetails = async () => {
    const id = this.props.match.params.title;
    const url = `${GET_GALLERY_DATA}?id=${id}`;
    const response = await get({ url: url });

    if (response) {
      response.forEach((element) => {
        element.images = JSON.parse(element.images);
      });
      this.setState({ details: response, loader: false });
    } else {
      this.setState({ loader: false });
    }
  };
  render() {
    const { details, loader } = this.state;

    return (
      <div>
        {loader ? (
          <Loader />
        ) : (
          <>
            <header class="entry-header">
              <h1 class="entryTitle">
                {details && details.length && details[0].title}
              </h1>{" "}
            </header>
            <NewsReadMore details={details} />
          </>
        )}
      </div>
    );
  }
}
