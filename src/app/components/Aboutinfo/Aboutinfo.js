import React, { Component } from "react";
import "./Aboutinfo.css";
import photo from "../../assets/images/Untitled-1.tif";
import { withRouter } from "react-router-dom";
import { GET_PROFILE_DATA, IMAGE_BASE_URL } from "../../utils/apiConstants";
import { get } from "../../utils/apiMethods";

class Aboutinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalData: "",
      name: "",
      Position: "",
    };
  }

  async componentDidMount() {
    const data = await get({ url: GET_PROFILE_DATA });
    if (data) {
      this.setState({
        name: data.name,
        generalData: data.General,
        Position: data.Position,
      });
    }
  }
  render() {
    const { history } = this.props;
    const { name, Position } = this.state;
    return (
      <div class="container about-us">
        <div class="row">
          <div class="col-xs-12 col-12 col-lg-6 text-center text-sm-left order-2 order-lg-1">
            <div class="fw-divider-space hidden-xs hidden-sm hidden-md hidden-lg about-us1"></div>

            <div class="fw-divider-space hidden-xs hidden-sm hidden-md hidden-xl about-us2"></div>
            <h4 class="special-heading text-sm-left ">
              <span class="above">{name.toUpperCase()}</span>
            </h4>
            <h3 class="special-heading text-sm-left ">
              <span class="underline">{Position}</span>
            </h3>

            <div class="fw-divider-space " style={{ marginTop: "40px" }}></div>
            <p className="abtPara">{this.state.generalData}</p>
            <div class="fw-divider-space " style={{ marginTop: "40px" }}></div>

            <button
              type="button"
              class="btn btn-outline-secondary btn-maincolor2"
              onClick={() => history.push("/profile")}
            >
              About Us
            </button>
          </div>
          <div class="col-xs-12 col-12 col-lg-6 text-center text-lg-left order-1 order-lg-2 ">
            <img
              src={`${IMAGE_BASE_URL}/uploads/banner/speaker.jpg`}
              alt="Image"
              className="abtImage"
            />
            <div
              class="fw-divider-space hidden-lg hidden-xl"
              style={{ marginTop: "50px" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Aboutinfo);
