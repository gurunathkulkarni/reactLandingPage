import React, { Component } from "react";
import "./AboutIcons.css";
import logo from "../../assets/images/logo.png";
import map from "../../assets/images/map1.jpg";
import contact from "../../assets/images/contact.png";
import interact from "../../assets/images/imgInteract.jpg";
import { withRouter } from "react-router-dom";

class AboutIcons extends Component {
  render() {
    const { history } = this.props;
    return (
      <div class="container abotIcon">
        <div class="row about-icons">
          <div class="col-md-4">
            <p
              class="about-icon"
              onClick={() => this.props.history.push("/aboutbjp")}
            >
              <img
                className="d-block img-fluid"
                src={logo}
                alt="Logo"
                width="90%"
              />
            </p>
            <p className="aboutIcon">About BJP</p>
          </div>
          <div class="col-md-4">
            <p
              class="about-icon "
              onClick={() => this.props.history.push("/aboutsavadatti")}
            >
              <img
                className="d-block img-fluid iconimg"
                src={map}
                alt="Logo"
                width="100%"
              />
            </p>
            <p className="aboutIcon">SAVADATTI</p>
          </div>
          <div class="col-md-4">
            <p class="about-icon " onClick={() => history.push("/contact")}>
              <img
                className="d-block img-fluid iconimg"
                src={contact}
                alt="Logo"
                width="100%"
              />
            </p>
            <p className="aboutIcon">CONTACT ME</p>
          </div>
          {/* <div class="col-sm">
            <p class="about-icon " onClick={()=>history.push('/contact')}>
              <img
                className="d-block img-fluid iconimg"
                src={interact}
                alt="Logo"
                width="90%"
              />
            </p>
            <p className="aboutIcon">INTERACT</p>
          </div> */}
        </div>
      </div>
    );
  }
}
export default withRouter(AboutIcons);
